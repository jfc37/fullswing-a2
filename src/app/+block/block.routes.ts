import { BlockListComponent } from './container/block-list/block-list.component';

export const routes = [
  { path: '', children: [
    { path: '', component: BlockListComponent }
  ]},
];
