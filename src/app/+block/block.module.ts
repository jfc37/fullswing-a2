import { BlockListComponent } from './container/block-list/block-list.component';
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './block.routes';

console.log('`Block` bundle loaded asynchronously');

@NgModule({
  declarations: [
    BlockListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild(routes),
  ],
})
export class BlockModule {
  public static routes = routes;
}
