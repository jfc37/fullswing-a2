import { LoginComponent } from './containers/login/login.component';

export const routes = [
  { path: '', children: [
    { path: '', component: LoginComponent }
  ]},
];
