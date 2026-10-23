import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-users',
  templateUrl: './users.html',
 
})

export class Users {
   users = [
    { name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' , address: '123 Main St, Anytown, USA'},
    { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '098-765-4321' , address: '456 Oak Ave, Somewhere, USA'},
    { name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '555-555-5555' , address: '789 Pine Rd, Elsewhere, USA'},
    { name: 'Alice Williams', email: 'alice.williams@example.com', phone: '111-222-3333' , address: '321 Elm St, Nowhere, USA'},
    { name: 'Charlie Brown', email: 'charlie.brown@example.com', phone: '444-444-4444' , address: '654 Maple Dr, Anyplace, USA'},
    { name: 'David Lee', email: 'david.lee@example.com', phone: '999-888-7777' , address: '987 Cedar Ln, Somewheres, USA'},
  ];

  deleteUser(name: string) {
    this.users = this.users.filter(user => user.name !== name);
  } 
  editUser(name: string) {
    const user = this.users.find(user => user.name === name); 
}
}
