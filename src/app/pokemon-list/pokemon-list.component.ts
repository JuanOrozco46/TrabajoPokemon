import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service'; // Ruta corregida
import { PokemonDetail } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  standalone: false, // Para que funcione con AppModule
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: PokemonDetail[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.cargarPokemons();
  }

  cargarPokemons(): void {
    this.loading = true;
    this.errorMessage = null;

    this.pokemonService.getPokemons().subscribe({
      next: (data: PokemonDetail[]) => {
        this.pokemons = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'No se pudo conectar con la PokéAPI. Intenta de nuevo.';
        this.loading = false;
      }
    });
  }
}