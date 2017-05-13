import { LockService } from './authentication/lock.service';
import { LoggedInGuard, AuthenticationService } from './';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
      LoggedInGuard,
      AuthenticationService,
      LockService
  ]
})
export class CommonModule {
}
