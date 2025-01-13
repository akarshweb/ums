import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // The service is provided at the root level, making it available application-wide
})
export class UserService {
  // Sample user data (In a real-world scenario, this could be fetched from an API or database)
  private users = [
    { id: 1, name: 'John Doe', address: '123 Main St', dob: '1990-01-01', age: 32 },
    { id: 2, name: 'Jane Smith', address: '456 Elm St', dob: '1992-05-15', age: 30 }
  ];

  // Returns the list of all users
  getUsers() {
    return this.users;
  }

  // Retrieves a user by their ID from the list
  getUserById(id: number) {
    return this.users.find(user => user.id === id);  // Finds the user by ID
  }

  // Adds a new user to the list
  // The user’s ID is set dynamically based on the length of the existing user list (could be replaced with a more robust system in the future)
  addUser(user: any) {
    user.id = this.users.length + 1;  // Dynamically assigning ID based on current number of users
    this.users.push(user);  // Adds the new user to the users array
  }
}
