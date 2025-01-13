import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // The service is provided at the root level, making it available application-wide
})
export class ThemeService {
  // Private BehaviorSubject to manage theme state (dark or light)
  private _isDarkTheme = new BehaviorSubject<boolean>(this.getStoredTheme());

  // Observable to allow components to subscribe to theme changes
  get isDarkTheme$(): Observable<boolean> {
    return this._isDarkTheme.asObservable();
  }

  // Returns the current value of the theme (dark or light) directly
  get isDark(): boolean {
    return this._isDarkTheme.value;
  }

  // Constructor to apply the theme when the service is initialized
  constructor() {
    this.applyTheme();
  }

  // Retrieves the stored theme from localStorage, defaulting to 'light' if none is found
  private getStoredTheme(): boolean {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark';  // Returns true if the stored theme is 'dark', otherwise false
  }

  // Stores the selected theme in localStorage so it persists across sessions
  private storeTheme(isDark: boolean): void {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  // Toggles between dark and light themes and updates the localStorage and body class
  public toggleTheme(): void {
    this._isDarkTheme.next(!this._isDarkTheme.value);  // Toggles the theme
    this.storeTheme(this._isDarkTheme.value);  // Store the new theme in localStorage
    this.applyTheme();  // Apply the new theme to the body
  }

  // Applies the theme by toggling the appropriate class on the document body
  public applyTheme(): void {
    const isDark = this._isDarkTheme.value;
    document.body.classList.remove(isDark ? 'light-theme' : 'dark-theme');  // Remove the current theme class
    document.body.classList.add(isDark ? 'dark-theme' : 'light-theme');  // Add the new theme class
  }
}
