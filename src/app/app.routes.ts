import { LoggedInGuard } from './common/authentication/logged-in-guard.service';
import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    canActivate: [ LoggedInGuard ],
    loadChildren: './+dashboard#DashboardModule'
  },
  { path: 'login', loadChildren: './+login#LoginModule'},
  { path: '**',    component: NoContentComponent },
];
