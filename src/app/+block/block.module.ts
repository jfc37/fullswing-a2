import { BlockFormComponent } from './components/block-form/block-form.component';
import { BlockSummaryComponent } from './components/block-summary/block-summary.component';
import { BlockDetailsComponent } from './container/block-details/block-details.component';
import { BlockTableComponent } from './components/block-table/block-table.component';
import { BlockListComponent } from './container/block-list/block-list.component';
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './block.routes';
import { BlockListDisplayComponent } from './components/block-list-display/block-list-display.component';
import { ClassListComponent } from './components/class-list/class-list.component';

console.log('`Block` bundle loaded asynchronously');

@NgModule({
  declarations: [
    BlockListComponent,
    BlockListDisplayComponent,
    BlockTableComponent,

    BlockDetailsComponent,
    BlockSummaryComponent,
    ClassListComponent,
    BlockFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    PipesModule,
    RouterModule.forChild(routes),
  ],
})
export class BlockModule {
  public static routes = routes;
}
