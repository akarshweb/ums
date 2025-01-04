import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Import the routes file
import { provideAnimations } from '@angular/platform-browser/animations'; // Import animations provider
import { MenuModule } from '@syncfusion/ej2-angular-navigations'; // Import Syncfusion Menu module
import { RouterModule } from '@angular/router'; // Import RouterModule for routing
import { CommonModule } from '@angular/common'; // Import CommonModule for directives like ngIf and ngFor

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Providing routing directly
    provideAnimations(),   // Provide animations support
    MenuModule,            // Import the Syncfusion Menu module
    RouterModule,          // Include RouterModule here for routing
    CommonModule,          // Include CommonModule for Angular directives
  ],
});
