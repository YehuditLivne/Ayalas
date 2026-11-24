import { Component } from '@angular/core';
import { Users } from '../users/users';

@Component({
  imports: [Users],
  selector: 'app-team',
  templateUrl: './team.html',
})
export class Team {}
