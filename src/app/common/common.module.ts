import * as auth from './';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
      auth.NumberIdGuard,
      auth.LoggedInGuard,
      auth.LockService
  ]
})
export class CommonModule {
}
