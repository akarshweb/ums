import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service'; // Service to fetch users
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { FormsModule } from '@angular/forms'; // Required for two-way binding with ngModel
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [GridModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'], 
})
export class UserListComponent implements OnInit {
  users: any[] = []; // List of all users
  filteredUsers: any[] = []; // Filtered list of users based on search input
  searchTerm = ''; // Input from the search bar
  pageSettings: PageSettingsModel = {
    pageSize: 10, // Number of records per page
    pageCount: 5, // Number of visible page numbers
    currentPage: 1, // Initial page
  };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    // Fetch all users and initialize the filtered list
    this.users = this.userService.getUsers();
    this.filteredUsers = [...this.users];
  }

  /**
   * Filters users based on the search term.
   * Matches name, address, or age.
   */
  applySearch() {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.address.toLowerCase().includes(term) ||
        user.age.toString().includes(term)
    );
  }

  /**
   * Handles row selection in the grid.
   * Navigates to the user detail page with the selected user's ID.
   */
  onRowSelected(event: any) {
    const id = event.data.id; // Extract user ID from selected row data
    this.router.navigate(['/user-detail', id]); // Navigate to user detail page
  }
}
