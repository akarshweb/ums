import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { GridModule } from '@syncfusion/ej2-angular-grids';  // Import Syncfusion Grid Module
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';  // Import PageSettingsModel for pagination

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [GridModule],  // Import the Syncfusion Grid module for displaying data
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  // Array to store list of users
  users: any[] = [];

  // Page settings for pagination in the grid
  pageSettings: PageSettingsModel = {
    pageSize: 10,  // Number of users per page
    pageCount: 5,  // Number of pages to display
    currentPage: 1 // Default page to start from
  };

  // Constructor to inject UserService and Router
  constructor(private userService: UserService, private router: Router) {}

  // ngOnInit lifecycle hook to fetch user data and handle initial setup
  ngOnInit() {
    // Fetch the list of users from the UserService
    this.users = this.userService.getUsers();

    // Initially hide content during page load for smoother user experience
    document.body.style.visibility = 'hidden';

    // Apply a delay (10ms) to allow content to load before making the page visible
    setTimeout(() => {
      document.body.style.visibility = 'visible';  // Reveal the content after loading
    }, 40);  // Adjust the delay time as necessary for better experience
  }

  // Event handler for row selection in the grid
  onRowSelected(event: any) {
    // Extract the selected user's ID and navigate to their details page
    const id = event.data.id;
    this.router.navigate(['/user-detail', id]);  // Navigate to user detail page
  }
}
