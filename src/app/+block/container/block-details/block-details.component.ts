import { BlockDetailsSelector } from './block-details.selector';
import { BlockDetailsDispatcher } from './block-details.dispatcher';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'fs-block-details',
    template: `
        <h2>BLOCK DETAILS</h2>
        <a routerLink="/blocks/220">220</a>
        <a routerLink="/blocks/221">221</a>
        <pre>{{model$ | async | json}}</pre>
    `,
    providers: [
        BlockDetailsDispatcher,
        BlockDetailsSelector
    ]
})
export class BlockDetailsComponent implements OnInit {

    public model$: Observable<any>;

    constructor(
        private _route: ActivatedRoute,
        private _dispatcher: BlockDetailsDispatcher,
        private _selector: BlockDetailsSelector) {}

    public ngOnInit(): void {
        this._route.params.map(params => params.id)
            .distinctUntilChanged()
            .subscribe(id => this._dispatcher.initialise(id));

        this.model$ = this._selector.getModel();
    }

}
