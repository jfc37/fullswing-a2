import { BlockEnrolmentComponent } from './containers/block-enrolment.component';

export const routes = [
  { path: '', children: [
    { path: '', component: BlockEnrolmentComponent }
  ]},
];
