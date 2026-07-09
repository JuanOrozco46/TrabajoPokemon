import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Importamos usando los nombres reales de tus archivos en las carpetas
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    AppComponent, 
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Requerimiento obligatorio N°1
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}