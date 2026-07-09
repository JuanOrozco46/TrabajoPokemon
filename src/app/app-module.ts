import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { App } from './app';
import { PokemonList } from './components/pokemon-list/pokemon-list';

@NgModule({
  declarations: [
    App, 
    PokemonList
  ],
  imports: [
    BrowserModule,
    HttpClientModule,       // Para poder hacer peticiones a la API
    FormsModule,            // Para formularios básicos
    ReactiveFormsModule     // Para usar formularios reactivos y debounce
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()     // Provee HttpClient para Angular 19/20
  ],
  bootstrap: [App],
})
export class AppModule {}