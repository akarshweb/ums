import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    { id: 1, name: 'John Doe', address: '123 Main St', dob: '1990-01-01', age: 32 },
    { id: 2, name: 'Jane Smith', address: '456 Elm St', dob: '1992-05-15', age: 30 }
  ];

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  addUser(user: any) {
    user.id = this.users.length + 1;
    this.users.push(user);
  }
  
}
