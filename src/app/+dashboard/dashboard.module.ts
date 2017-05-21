import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './dashboard.routes';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { UpcomingScheduleComponent } from './components/upcoming-schedule';
import { CurrentPassesComponent } from './components/current-passes';

console.log('`Dashboard` bundle loaded asynchronously');

@NgModule({
  declarations: [
    DashboardComponent,

    UpcomingScheduleComponent,
    CurrentPassesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class DashboardModule {
  public static routes = routes;
}
