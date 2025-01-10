import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';

// Enable ripple effect globally for Syncfusion components
enableRipple(true);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, MenuModule, RouterModule],
})
export class AppComponent {
  title = 'user-management-system';

  // Menu items for the side menu
  menuItems: MenuItemModel[] = [
    { text: 'Home', url: '/home' },
    { text: 'User List', url: '/user-list' },
    { text: 'Create User', url: '/user-create' },
  ];

  // Controls the visibility of the menu
  menuVisible = true;

  constructor(public themeService: ThemeService) {
    // Apply the initial theme (dark or light) on app load
    this.themeService.applyTheme();
  }

  // Toggle the visibility of the menu
  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  // Determine the position of the menu toggle button
  getToggleButtonLeftPosition(): string {
    return this.menuVisible ? '130px' : '10px';
  }
}
