import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';  // Import PageSettingsModel

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [GridModule],
  templateUrl: './user-list.component.html',    // HTML template
  styleUrls: ['./user-list.component.scss'],   // SCSS file linked here
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  pageSettings: PageSettingsModel = {   // Initialize pageSettings here
    pageSize: 10,  // Number of items per page
    pageCount: 5,  // Total number of pages
    currentPage: 1 // Starting page
  };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    // Fetch the list of users from the UserService
    this.users = this.userService.getUsers();

      // Initially hide content during page load
      document.body.style.visibility = 'hidden';

      // Apply a delay (500ms) to give time for everything to load before showing the content
      setTimeout(() => {
        document.body.style.visibility = 'visible';  // Make body visible after content is fully loaded
      }, 10);  // Adjust this delay if necessary

  }

  onRowSelected(event: any) {
    const id = event.data.id;
    this.router.navigate(['/user-detail', id]);
  }
}
