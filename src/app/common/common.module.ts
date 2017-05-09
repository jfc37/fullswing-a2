import { LoggedInGuard } from './authentication/logged-in-guard.service';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
      LoggedInGuard
  ]
})
export class CommonModule {
}
