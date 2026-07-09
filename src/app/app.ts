import { Component } from '@angular/core';
import { PokemonList } from './components/pokemon-list/pokemon-list';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
})
export class App {
  title = 'taller-pokeapi';
}