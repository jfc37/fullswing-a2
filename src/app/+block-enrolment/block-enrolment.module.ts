import { PipesModule } from '../pipes/pipes.module';
import { BlockGroupComponent } from './components/block-group/block-group.component';
import { BlockDisplayComponent } from './components/block-display/block-display.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './block-enrolment.routes';
import { BlockEnrolmentComponent } from './containers/block-enrolment.component';

console.log('`Block Enrolment` bundle loaded asynchronously');

@NgModule({
  declarations: [
    BlockEnrolmentComponent,
    BlockGroupComponent,
    BlockDisplayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild(routes),
  ],
})
export class BlockEnrolmentModule {
  public static routes = routes;
}
