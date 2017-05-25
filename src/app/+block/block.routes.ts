import { BlockDetailsComponent } from './container/block-details/block-details.component';
import { BlockListComponent } from './container/block-list/block-list.component';

export const routes = [
  { path: '', children: [
    { path: '', component: BlockListComponent },
    { path: ':id', component: BlockDetailsComponent },
  ]},
];
