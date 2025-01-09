import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(this.getStoredTheme());

  constructor() {
    this.applyTheme();
  }

  private getStoredTheme(): boolean {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark';
  }

  private storeTheme(isDark: boolean): void {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  public toggleTheme(): void {
    this.isDarkTheme.next(!this.isDarkTheme.value);
    this.storeTheme(this.isDarkTheme.value);
    this.applyTheme();
  }

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

    // Allow time for background image to load
    body.style.opacity = '0';
    setTimeout(() => {
      body.style.opacity = '1';
    }, 200);
  }
}
