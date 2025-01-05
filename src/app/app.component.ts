import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { RouterModule } from '@angular/router';
import { ThemeService } from './services/theme.service';  // Import ThemeService

enableRipple(true);

@Component({
  selector: 'app-root',
  template: `
    <div class="app-layout">
      <div class="menu-container">
        <ejs-menu [items]='menuItems' orientation="Vertical" cssClass="custom-menu"></ejs-menu>
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

        /* Add these styles for the menu items */
        ::ng-deep .e-menu-container .e-menu-item {
          width: 100%;
          padding: 12px 15px;
        }

        ::ng-deep .e-menu-wrapper ul.e-menu {
          width: 100%;
        }

        ::ng-deep .e-menu-wrapper ul.e-vertical {
          width: 100%;
        }
      }

      .content-container {
        flex: 1;
        padding: 20px;
        overflow-y: auto;
        background-color: var(--background-color);
      }
    `
  ],
  imports: [MenuModule, RouterModule],
})
export class AppComponent {

  title = 'user-management-system';

  public menuItems: MenuItemModel[] = [
    { text: 'Home', url: '/home' },
    { text: 'User List', url: '/user-list' },
    { text: 'Create User', url: '/user-create' },
  ];

  constructor(private themeService: ThemeService) {
    // Apply theme on initialization
    this.themeService.applyTheme();
  }
}
