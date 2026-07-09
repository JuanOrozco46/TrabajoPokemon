import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { PokemonDetail } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  // Arreglo vacío donde guardaremos los Pokémon una vez que la PokéAPI responda
  pokemons: PokemonDetail[] = [];

  // Variables de estado para controlar qué se ve en la pantalla
  loading: boolean = true;         // Comienza en true porque la app arranca cargando datos
  errorMessage: string | null = null; // Comienza en null (sin errores)

  // Inyectamos el servicio en el constructor para poder usar sus métodos
  constructor(private pokemonService: PokemonService) {}

  // Este método se ejecuta automáticamente cuando el componente se muestra en pantalla
  ngOnInit(): void {
    this.cargarPokemons();
  }

  // Método para llamar al servicio y suscribirse al flujo de datos
  cargarPokemons(): void {
    this.loading = true;       // Si reintentamos, volvemos a poner el estado de carga en true
    this.errorMessage = null;  // Limpiamos cualquier error previo

    // Nos suscribimos al Observable que creamos en el servicio
    this.pokemonService.getPokemons().subscribe({
      // El bloque 'next' se ejecuta si la petición a internet fue exitosa
      next: (data: PokemonDetail[]) => {
        this.pokemons = data;  // Guardamos los datos recibidos en nuestro arreglo
        this.loading = false;  // Apagamos el aviso de "Cargando..."
      },
      // El bloque 'error' se ejecuta si se cae el internet o la API falla
      error: (err) => {
        console.error(err);
        this.errorMessage = 'No se pudo conectar con la PokéAPI. Verifica tu conexión a internet e intenta de nuevo.';
        this.loading = false;  // Apagamos el aviso de carga porque ya terminó (con error)
      }
    });
  }
}