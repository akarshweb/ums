import { Component, OnInit } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';

// Enable ripple effect for Syncfusion components
enableRipple(true);

@Component({
  selector: 'app-root',
  standalone: true,  // Indicates that the component is a standalone component
  templateUrl: './app.component.html',  // Link to the HTML template
  styleUrls: ['./app.component.scss'],  // Link to the CSS/SCSS styles
  imports: [CommonModule, MenuModule, RouterModule],  // Import necessary modules
})
export class AppComponent implements OnInit {
  title = 'user-management-system';  // Application title
  menuItems: MenuItemModel[] = [
    { text: 'Home', url: '/home' },
    { text: 'User List', url: '/user-list' },
    { text: 'Create User', url: '/user-create' },
  ];  // Define menu items for the sidebar
  menuVisible = true;  // Track visibility of the menu

  constructor(public themeService: ThemeService) {
    this.themeService.applyTheme();  // Apply the selected theme on component load
  }

  ngOnInit() {
    // Initially hide content during page load
    document.body.style.visibility = 'hidden';

    // Apply a delay to give time for everything to load before showing the content
    setTimeout(() => {
      document.body.style.visibility = 'visible';  // Make body visible after content is fully loaded
    }, 25);  // Adjust this delay if necessary
  }

  // Toggle the visibility of the menu (show or hide)
  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  // Get the left position of the menu toggle button based on menu visibility
  getToggleButtonLeftPosition(): string {
    return this.menuVisible ? '130px' : '10px';  // Shifts button left/right depending on menu visibility
  }
}
