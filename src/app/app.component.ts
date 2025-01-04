import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { RouterModule } from '@angular/router';  // Import RouterModule

enableRipple(true);

@Component({
  selector: 'app-root',
  template: `
    <div class="menu-container">
      <!-- Render Vertical Menu -->
      <ejs-menu [items]='menuItems' orientation="Vertical"></ejs-menu>
    </div>
    <h1>Hello, {{ title }}</h1>
    <router-outlet></router-outlet> <!-- Ensure router outlet is placed correctly -->
  `,
  styles: [
    `
      .menu-container {
        width: 250px;
        height: 100%;
        border-right: 1px solid var(--border-color);
        background-color: var(--background-color);
      }
    `
  ],
  imports: [MenuModule, RouterModule], // Make sure RouterModule is imported here
})
export class AppComponent {
  title = 'user-management-system'; // Define the title property here

  public menuItems: MenuItemModel[] = [
    {
      text: 'Home',
      items: [
        {
          text: 'Go to Home',
          url: '/home', // Use routerLink
        }
      ]
    },
    {
      text: 'User List',
      items: [
        {
          text: 'View Users',
          url: '/user-list', // Use routerLink
        }
      ]
    },
    {
      text: 'Create User',
      items: [
        {
          text: 'Create New User',
          url: '/user-create', // Use routerLink
        }
      ]
    },
    // Add more menu items as needed
  ];
}
