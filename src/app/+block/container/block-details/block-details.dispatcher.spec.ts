import { LoadSelectedBlock } from '../../../services/redux/blocks/blocks.actions';
import { AppState } from '../../../services/redux/app/app.model';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { BlockDetailsDispatcher } from './block-details.dispatcher';

describe('BlockDetailsDispatcher', () => {
    let sut: BlockDetailsDispatcher;
    let store: Store<AppState>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                BlockDetailsDispatcher,
                { provide: Store, useValue: {} }
            ]
        });

        sut = TestBed.get(BlockDetailsDispatcher);
        store = TestBed.get(Store);
    });

    it('should exist', () => {
        expect(sut).toBeTruthy();
    });

    describe('initialise', () => {
        const id = 132;

        beforeEach(() => {
            store.dispatch = jasmine.createSpy('dispatch');

            sut.initialise(id);
        });

        it('should load selected block', () => {
            expect(store.dispatch).toHaveBeenCalledWith(new LoadSelectedBlock(id));
        });
    });
});
