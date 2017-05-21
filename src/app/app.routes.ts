import { LoggedInGuard } from './common/authentication/logged-in-guard.service';
import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    canActivate: [ LoggedInGuard ],
    loadChildren: './+dashboard#DashboardModule'
  },
  {
    path: 'block-enrolment',
    canActivate: [ LoggedInGuard ],
    loadChildren: './+block-enrolment#BlockEnrolmentModule'
  },
  { path: 'login', loadChildren: './+login#LoginModule'},
  { path: '**',    component: NoContentComponent },
];
