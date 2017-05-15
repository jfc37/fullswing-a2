import { LoadBlocksForEnrolment } from '../../services/redux/blocks-for-enrolment/blocks-for-enrolment.actions';
import { getBlocksForEnrolmentState } from '../../services/redux/blocks-for-enrolment/blocks-for-enrolment.selectors';
import { AppState } from '../../services/redux/app/app.model';
import { Store } from '@ngrx/store';
import { BlocksForEnrolmentState } from '../../services/redux/blocks-for-enrolment/blocks-for-enrolment.model';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

/**
 * Block enrolment for users
 */
@Component({
    selector: 'fs-block-enrolment',
    template: `
        <h2>Block Enrolment</h2>
        <pre>{{ state$ | async | json }}</pre>
    `
})
export class BlockEnrolmentComponent implements OnInit {
    public state$: Observable<BlocksForEnrolmentState>;

    constructor(private _store: Store<AppState>) {}

    public ngOnInit() {
        this._store.dispatch(new LoadBlocksForEnrolment());

        this.state$ = this._store.select(getBlocksForEnrolmentState);
    }
}
