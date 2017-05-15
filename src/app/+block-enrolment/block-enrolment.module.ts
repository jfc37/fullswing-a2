import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './block-enrolment.routes';
import { BlockEnrolmentComponent } from './containers/block-enrolment.component';

console.log('`Block Enrolment` bundle loaded asynchronously');

@NgModule({
  declarations: [
    BlockEnrolmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class BlockEnrolmentModule {
  public static routes = routes;
}
