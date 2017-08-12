import { NewBlockSelector } from './new-block.selector';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BlockFormModel, BlockModel } from '../../components/block-form/block-form.model';
import { NewBlockDispatcher } from './new-block.dispatcher';

@Component({
    selector: 'fs-new-block',
    template: `
        <h2>CREATE BLOCK</h2>
        <fs-block-form [model]="blockFormModel$ | async"
                        (onSubmit)="create($event)"></fs-block-form>
    `,
    providers: [
      NewBlockSelector,
      NewBlockDispatcher
    ]
})
export class NewBlockComponent implements OnInit {
  public blockFormModel$: Observable<BlockFormModel>;

  constructor(
    private _selector: NewBlockSelector,
    private _dispatcher: NewBlockDispatcher) {}

  public ngOnInit(): void {
    this._dispatcher.initialise();
    this.blockFormModel$ = this._selector.getBlockFormModel();
  }

  public create(block: BlockModel): void {
    this._dispatcher.create(block);
  }
}
