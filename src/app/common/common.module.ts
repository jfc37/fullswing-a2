import { CurrentPassesRepository } from '../services/redux/current-passes/current-passes.repository';
import { UpcomingScheduleRepository } from '../services/redux/upcoming-schedule/upcoming-schedule.repository';
import { LockService } from './authentication/lock.service';
import { LoggedInGuard } from './';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
      LoggedInGuard,
      LockService,
      UpcomingScheduleRepository,
      CurrentPassesRepository
  ]
})
export class CommonModule {
}
