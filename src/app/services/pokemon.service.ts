import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PokeAPIResponse, PokemonDetail } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root' // Le dice a Angular que este servicio se puede usar en cualquier componente
})
export class PokemonService {
  // URL inicial para traer los primeros 20 Pokémon
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

  // Inyectamos el HttpClient en el constructor para poder usarlo como "this.http"
  constructor(private http: HttpClient) {}

  // Este método devuelve un Observable que transporta un arreglo de detalles de Pokémon
  getPokemons(): Observable<PokemonDetail[]> {
    return this.http.get<PokeAPIResponse>(this.apiUrl).pipe(
      
      // 1. switchMap intercepta la lista de 20 Pokémon y cambia el flujo hacia una nueva petición
      switchMap((response: PokeAPIResponse) => {
        
        // Convertimos el arreglo de resultados en un arreglo de peticiones HTTP individuales
        const detalleRequests: Observable<PokemonDetail>[] = response.results.map(pokemon => 
          this.http.get<PokemonDetail>(pokemon.url)
        );
        
        // 2. forkJoin dispara las 20 peticiones en paralelo y espera a que terminen todas juntas
        return forkJoin(detalleRequests);
      }),

      // 3. map toma el resultado final de los detalles y nos permite ordenarlos
      map((pokemons: PokemonDetail[]) => {
        // Ordena los Pokémon de menor a mayor según su ID para que salgan en orden de Pokédex
        return pokemons.sort((a, b) => a.id - b.id);
      })
    );
  }
}