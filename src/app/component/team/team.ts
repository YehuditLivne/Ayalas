import { Component } from '@angular/core';
import { Users } from '../home/users/users';

@Component({
  imports: [Users],
  selector: 'app-team',
  styleUrl: './team.css',
  templateUrl: './team.html',
})
export class Team {}
