import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Disciplinas } from './pages/disciplinas/disciplinas';
import { Tutorial } from './pages/tutorial/tutorial';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'disciplinas', component: Disciplinas },
  { path: 'tutorial', component: Tutorial }
];