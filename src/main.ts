import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module'; // Apunta al archivo app-module.ts

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));