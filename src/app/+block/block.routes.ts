import { NumberIdGuard } from '../common/authentication/number-id-guard.service';
import { BlockDetailsComponent } from './container/block-details/block-details.component';
import { BlockListComponent } from './container/block-list/block-list.component';
import { NewBlockComponent } from './container/new-block/new-block.component';

export const routes = [
  { path: '', children: [
    {
      path: '',
      component: BlockListComponent
    },
    {
      path: 'create',
      component: NewBlockComponent
    },
    {
      path: ':id',
      canActivate: [ NumberIdGuard ],
      component: BlockDetailsComponent
    },
  ]},
];
