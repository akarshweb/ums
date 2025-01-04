import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <nav [class.open]="menuOpen" class="main-nav">
      <button (click)="toggleMenu()" class="menu-toggle-btn">
        {{ menuOpen ? 'Close Menu' : 'Open Menu' }}
      </button>
      <ul>
        <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
        <li><a routerLink="/user-list" routerLinkActive="active">User List</a></li>
        <li><a routerLink="/user-create" routerLinkActive="active">Create User</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    .main-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 250px;
      height: 100vh;
      background-color: var(--primary-bg);
      box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
      transform: translateX(-100%);
      transition: transform 0.3s ease-in-out;
    }

    .main-nav.open {
      transform: translateX(0);
    }

    .menu-toggle-btn {
      position: absolute;
      top: 10px;
      right: -50px;
      width: 40px;
      height: 40px;
      background-color: var(--primary-color);
      color: #fff;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 50px 0 0;
    }

    li {
      padding: 10px 20px;
    }

    a {
      text-decoration: none;
      color: var(--primary-color);
      font-weight: bold;
      display: block;
    }

    a:hover {
      color: white;
      background-color: var(--primary-color);
    }
  `]
})
export class MenuComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
