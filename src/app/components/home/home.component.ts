import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',  
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  // Injecting the ThemeService to manage theme-related logic in the component
  constructor(private themeService: ThemeService) {}

  // Method to toggle the theme (light/dark) by calling the ThemeService's toggleTheme method
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
