import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Users } from '../users/users';

@Component({
  imports: [RouterLink, Users],
  selector: 'app-home',
  templateUrl: './home.html',
})
export class Home {}
