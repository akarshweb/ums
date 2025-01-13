import { Component, OnInit } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';

enableRipple(true);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, MenuModule, RouterModule],
})
export class AppComponent implements OnInit {
  title = 'user-management-system';
  menuItems: MenuItemModel[] = [
    { text: 'Home', url: '/home' },
    { text: 'User List', url: '/user-list' },
    { text: 'Create User', url: '/user-create' },
  ];
  menuVisible = true;

  constructor(public themeService: ThemeService) {
    this.themeService.applyTheme();
  }

  ngOnInit() {
    // Initially hide content during page load
    document.body.style.visibility = 'hidden';

    // Apply a delay (500ms) to give time for everything to load before showing the content
    setTimeout(() => {
      document.body.style.visibility = 'visible';  // Make body visible after content is fully loaded
    }, 25);  // Adjust this delay if necessary
  }

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  getToggleButtonLeftPosition(): string {
    return this.menuVisible ? '130px' : '10px';
  }
}
