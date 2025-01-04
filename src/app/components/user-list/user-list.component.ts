import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [GridModule],
  template: `
    <h2>User List</h2>
<ejs-grid [dataSource]="users" (rowSelected)="onRowSelected($event)">
  <e-columns>
    <e-column field="name" headerText="Name" width="150"></e-column>
    <e-column field="address" headerText="Address" width="200"></e-column>
    <e-column field="age" headerText="Age" width="100"></e-column>
  </e-columns>
</ejs-grid>

  `,
  styles: []
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    // Fetch the list of users from the UserService
    this.users = this.userService.getUsers();
  }

  // Method to handle row selection event
  onRowSelected(event: any) {
    const id = event.data.id; // Get the user ID from the selected row
    this.router.navigate(['/user-detail', id]); // Navigate to the user detail page with the user ID
  }
}
