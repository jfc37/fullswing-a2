import { BlockListDisplayModel } from '../../components/block-list-display/block-list-display.model';
import { BlockListSelector } from './block-list.selector';
import { BlockListDispatcher } from './block-list.dispatcher';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'fs-block-list',
    template: `
        <h2>BLOCKS</h2>
        <a routerLink="/blocks/create">Create new</a>
        <fs-block-list-display [model]="model$ | async"></fs-block-list-display>
    `,
    providers: [
        BlockListDispatcher,
        BlockListSelector
    ]
})
export class BlockListComponent implements OnInit {
    public model$: Observable<BlockListDisplayModel>;

    constructor(
        private _dispatcher: BlockListDispatcher,
        private _selector: BlockListSelector) { }

    public ngOnInit(): void {
        this._dispatcher.initialise();

        this.model$ = this._selector.getBlockListDisplayModel();
    }
}
