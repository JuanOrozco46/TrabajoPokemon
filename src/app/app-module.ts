import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // <-- Importamos esta nueva función

// Importamos usando los nombres reales de tus archivos en las carpetas
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    AppComponent, 
    PokemonListComponent
  ],
  imports: [
    BrowserModule
    // Eliminamos HttpClientModule de aquí
  ],
  providers: [
    provideHttpClient() // <-- Lo agregamos aquí para habilitar los servicios HTTP
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}