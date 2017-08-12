import { LoadBlocks } from '../../../services/redux/blocks/blocks.actions';
import { AppState } from '../../../services/redux/app/app.model';
import { BlockListDispatcher } from './block-list.dispatcher';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';

describe('BlockListDispatcher', () => {
    let sut: BlockListDispatcher;
    let store: Store<AppState>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                BlockListDispatcher,
                { provide: Store, useValue: {} }
            ]
        });

        sut = TestBed.get(BlockListDispatcher);
        store = TestBed.get(Store);
    });

    it('should exist', () => {
        expect(sut).toBeTruthy();
    });

    describe('initialise', () => {
        beforeEach(() => {
            store.dispatch = jasmine.createSpy('dispatch');

            sut.initialise();
        });

        it('should load blocks', () => {
            expect(store.dispatch).toHaveBeenCalledWith(new LoadBlocks());
        });
    });
});
