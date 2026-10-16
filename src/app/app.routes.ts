import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Team } from './component/team/team';

export const routes: Routes = [
  { path: '', component: Home, title: 'דף הבית | מרחב ניהולי' },
  { path: 'team', component: Team, title: 'הצוות שלי | מרחב ניהולי' },
  { path: '**', redirectTo: '' },
];
