import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ADMIN, HOME, LOGIN, TO_LOGIN } from './consts/routes.consts';
import { HomeComponent } from './components/home/home.component';
import { appGuard } from './app.guard';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
  {
    path: TO_LOGIN,
    redirectTo: LOGIN,
    pathMatch: 'full',
  },
  {
    path: LOGIN,
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: HOME,
    component: HomeComponent,
    canActivate: [appGuard],
    pathMatch: 'full',
  },
  {
    path: HOME,
    canActivateChild: [appGuard],
    children: [
      {
        path: ADMIN,
        component: AdminComponent,
      },
    ],
  },
];
