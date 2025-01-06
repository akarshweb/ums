import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ThemeService } from './services/theme.service';

enableRipple(true);

@Component({
  selector: 'app-root',
  template: `
    <div class="app-layout">
      <button
        class="menu-toggle-btn"
        [style.left]="menuVisible ? '130px' : '10px'"
        (click)="toggleMenu()"
      >
        <span *ngIf="menuVisible">☰</span>
        <span *ngIf="!menuVisible">☰</span>
      </button>
      <div class="menu-container" [class.hidden]="!menuVisible">
        <ejs-menu [items]="menuItems" orientation="Vertical" cssClass="custom-menu"></ejs-menu>
      </div>
      <div class="content-container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
    `
      .app-layout {
        display: flex;
        height: 100vh;
        overflow: hidden;
      }

      .menu-container {
        width: 120px;
        height: 100%;
        border-right: 1px solid var(--border-color);
        background-color: var(--background-color);
        transition: transform 0.3s ease-in-out;
      }

      .menu-container.hidden {
        transform: translateX(-250px);
      }

      .content-container {
        flex: 1;
        padding: 20px;
        overflow-y: auto;
        background-color: var(--background-color);
      }

      /* Menu toggle button for opening and closing */
      .menu-toggle-btn {
        position: fixed;
        top: 10px;
        left: -40px;
        z-index: 1000;
        background: var(--primary-color); /* Initial background: original blue */
        color: white; /* Button text: white */
        border: none;
        border-radius: 4px;
        padding: 6px 12px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
      }

      .menu-toggle-btn span {
        color: white; /* Text color for both buttons */
      }

      /* On hover, change the background color to grey */
      .menu-toggle-btn:hover {
        background-color: grey;
      }
    `
  ],
  imports: [MenuModule, RouterModule, CommonModule], // Add CommonModule
})
export class AppComponent {
  title = 'user-management-system';

  public menuItems: MenuItemModel[] = [
    { text: 'Home', url: '/home' },
    { text: 'User List', url: '/user-list' },
    { text: 'Create User', url: '/user-create' },
  ];

  menuVisible = true;

  constructor(private themeService: ThemeService) {
    this.themeService.applyTheme();
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
