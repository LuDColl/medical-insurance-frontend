import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HOME, LOGIN } from './consts/routes.consts';
import { HomeComponent } from './components/home/home.component';
import { appGuard } from './app.guard';

export const routes: Routes = [
  { path: LOGIN, component: LoginComponent },
  {
    path: HOME,
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [appGuard],
  },
];
