import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Configures the application's routes
    provideAnimations(),   // Enables animations in the app
    MenuModule,            // Includes Syncfusion Menu module for navigation
    RouterModule,          // Provides Angular routing directives
    CommonModule,          // Enables common Angular directives like *ngIf and *ngFor
  ],
});
