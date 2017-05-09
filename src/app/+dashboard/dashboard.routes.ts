import { DashboardComponent } from './containers/dashboard/dashboard.component';

export const routes = [
  { path: '', children: [
    { path: '', component: DashboardComponent }
  ]},
];
