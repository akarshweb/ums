import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Configures Angular's router with the application's defined routes
    provideRouter(routes),

    // Enables Angular's animations system, allowing animations throughout the app
    provideAnimations(),
  ],
};
