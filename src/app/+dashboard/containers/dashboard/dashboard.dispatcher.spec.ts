import { LoadCurrentPasses } from '../../../services/redux/current-passes/current-passes.actions';
import { LoadUpcomingSchedule } from '../../../services/redux/upcoming-schedule/upcoming-schedule.actions';
import { AppState } from '../../../services/redux/app/app.model';
import { TestBed, async, inject } from '@angular/core/testing';
import { DashboardDispatcher } from './dashboard.dispatcher';
import { Store } from '@ngrx/store';

describe('DashboardDispatcher', () => {
    let sut: DashboardDispatcher;
    let store: Store<AppState>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                DashboardDispatcher,
                { provide: Store, useValue: {} }
            ]
        });

        store = TestBed.get(Store);
        sut = TestBed.get(DashboardDispatcher);
    });

    describe('initialise', () => {
        beforeEach(() => {
            store.dispatch = jasmine.createSpy('dispatch');

            sut.initialise();
        });

        it('should load upcoming schedule', () => {
            expect(store.dispatch).toHaveBeenCalledWith(new LoadUpcomingSchedule());
        });

        it('should load current passes', () => {
            expect(store.dispatch).toHaveBeenCalledWith(new LoadCurrentPasses());
        });
    });
});
