import { Component } from '@angular/core';
import { Users } from './users/users';

@Component({
  imports: [Users],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  OpenUsers()
  {
    
  }
}
