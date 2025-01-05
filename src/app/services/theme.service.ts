import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';  // Import BehaviorSubject

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(this.getStoredTheme());
  isDarkTheme$ = this.isDarkTheme.asObservable();

  constructor() {
    this.applyTheme(); // Apply theme on service initialization
  }

  toggleTheme(): void {
    const newTheme = !this.isDarkTheme.value;
    this.isDarkTheme.next(newTheme);  // Update the theme state
    this.applyTheme();  // Apply the theme
    this.storeTheme(newTheme);  // Persist the theme in localStorage
  }

  private getStoredTheme(): boolean {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark'; // Default to light theme if no value is found
  }

  private storeTheme(isDark: boolean): void {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  // Make the method public so it can be accessed from AppComponent
  public applyTheme(): void {
    const isDark = this.isDarkTheme.value;
    const body = document.body;

    if (isDark) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }
}
