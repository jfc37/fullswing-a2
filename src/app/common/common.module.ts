import { LoggedInGuard, AuthenticationService } from './';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
      LoggedInGuard,
      AuthenticationService
  ]
})
export class CommonModule {
}
