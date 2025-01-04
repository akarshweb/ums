import { Component } from '@angular/core';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  menuItems = [
    {
      text: 'User Management',
      items: [
        { text: 'User List', url: '/user-list' },
        { text: 'Create User', url: '/user-create' },
      ],
    },
  ];

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
