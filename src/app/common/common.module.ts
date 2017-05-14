import { LockService } from './authentication/lock.service';
import { LoggedInGuard } from './';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
      LoggedInGuard,
      LockService
  ]
})
export class CommonModule {
}
