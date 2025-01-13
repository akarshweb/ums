import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [FormsModule, DatePickerModule, CommonModule],
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  name = '';  // Stores the name input value
  address = '';  // Stores the address input value
  dob: string | null = null;  // Stores the date of birth value

  constructor(private userService: UserService, private router: Router) {}

  // Method to handle form submission
  onSubmit() {
    if (this.name && this.address && this.dob) {  // Check if all fields are valid
      const age = this.calculateAge(this.dob);  // Calculate age based on the date of birth
      this.userService.addUser({ name: this.name, address: this.address, dob: this.dob, age: age });  // Add user to the service
      this.router.navigate(['/user-list']);  // Redirect to user list after submission
    }
  }

  // Method to calculate age from date of birth
  calculateAge(dob: string): number {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();  // Calculate age

    const month = currentDate.getMonth();
    const day = currentDate.getDate();

    // Adjust age if the current date is before the user's birthday this year
    if (month < birthDate.getMonth() || (month === birthDate.getMonth() && day < birthDate.getDate())) {
      age--;
    }

    return age;  
  }
}
