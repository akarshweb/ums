import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDarkTheme = new BehaviorSubject<boolean>(this.getStoredTheme());

  get isDarkTheme$(): Observable<boolean> {
    return this._isDarkTheme.asObservable();
  }

  get isDark(): boolean {
    return this._isDarkTheme.value;
  }

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
    this._isDarkTheme.next(!this._isDarkTheme.value);
    this.storeTheme(this._isDarkTheme.value);
    this.applyTheme();
  }

  public applyTheme(): void {
    const isDark = this._isDarkTheme.value;
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
