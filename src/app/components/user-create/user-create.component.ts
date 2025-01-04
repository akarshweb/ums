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
  name = '';
  address = '';
  dob: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    if (this.name && this.address && this.dob) {
      const age = this.calculateAge(this.dob);
      this.userService.addUser({ name: this.name, address: this.address, dob: this.dob, age: age });
      this.router.navigate(['/user-list']);
    }
  }

  calculateAge(dob: string): number {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();

    // Adjust age if the current date is before the user's birthday this year
    if (month < birthDate.getMonth() || (month === birthDate.getMonth() && day < birthDate.getDate())) {
      age--;
    }

    return age;
  }
}
