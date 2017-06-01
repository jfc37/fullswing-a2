import { BlockFormModel, BlockModel } from '../../components/block-form/block-form.model';
import { ClassListModel } from '../../components/class-list/class-list.model';
import { BlockSummaryModel } from '../../components/block-summary/block-summary.model';
import { BlockDetailsSelector } from './block-details.selector';
import { BlockDetailsDispatcher } from './block-details.dispatcher';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
    selector: 'fs-block-details',
    template: `
        <h2>{{title$ | async}}</h2>
        <a routerLink="/blocks/215">215</a>
        <a routerLink="/blocks/216">216</a>
        <fs-block-form [model]="blockFormModel$ | async"
                       (onSubmit)="update($event)"></fs-block-form>
        <fs-class-list [model]="classListModel$ | async"></fs-class-list>
        <fs-block-summary [model]="summaryModel$ | async"></fs-block-summary>
    `,
    providers: [
        BlockDetailsDispatcher,
        BlockDetailsSelector
    ]
})
export class BlockDetailsComponent implements OnInit, OnDestroy {

    public summaryModel$: Observable<BlockSummaryModel>;
    public classListModel$: Observable<ClassListModel>;
    public blockFormModel$: Observable<BlockFormModel>;
    public title$: Observable<string>;

    private _dispatchSubscription: Subscription;
    private _id: number;

    constructor(
        private _route: ActivatedRoute,
        private _dispatcher: BlockDetailsDispatcher,
        private _selector: BlockDetailsSelector) {}

    public ngOnInit(): void {
        this._dispatchSubscription = this._route.params.map(params => +params.id)
            .distinctUntilChanged()
            .subscribe(id => {
                this._id = id;
                this._dispatcher.initialise(id);
            });

        this.title$ = this._selector.getTitle();
        this.summaryModel$ = this._selector.getSummaryModel();
        this.classListModel$ = this._selector.getClassListModel();
        this.blockFormModel$ = this._selector.getBlockFormModel();
    }

    public ngOnDestroy(): void {
        if (this._dispatchSubscription) {
            this._dispatchSubscription.unsubscribe();
        }
    }

    public update(block: BlockModel) {
        this._dispatcher.update(block, this._id);
    }

}
