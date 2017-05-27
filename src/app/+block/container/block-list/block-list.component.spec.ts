import { BlockListSelector } from './block-list.selector';
import { BlockListDispatcher } from './block-list.dispatcher';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BlockListComponent } from './block-list.component';

describe('BlockListComponent', () => {
    let fixture: ComponentFixture<BlockListComponent>;
    let comp: BlockListComponent;
    let dispatcher: BlockListDispatcher;
    let selector: BlockListSelector;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                BlockListComponent
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).overrideComponent(BlockListComponent, {
            set: {
                providers: [
                    { provide: BlockListDispatcher, useValue: {} },
                    { provide: BlockListSelector, useValue: {} }
                ]
            }
        });
    });

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(BlockListComponent);
            comp = fixture.componentInstance;

            dispatcher = fixture.debugElement.injector.get(BlockListDispatcher);
            dispatcher.initialise = jasmine.createSpy('initialise');

            selector = fixture.debugElement.injector.get(BlockListSelector);
            selector.getBlockListDisplayModel = jasmine.createSpy('getBlockListDisplayModel');
        });
    }));

    it('should exist', () => {
        expect(comp).toBeTruthy();
    });

    describe('ngOnInit', () => {
        beforeEach(() => {
            comp.ngOnInit();
        });

        it('should load required data', () => {
            expect(dispatcher.initialise).toHaveBeenCalled();
        });

        it('should select model', () => {
            expect(selector.getBlockListDisplayModel).toHaveBeenCalled();
        });
    });
});
