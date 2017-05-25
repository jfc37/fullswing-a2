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

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                BlockListComponent
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).overrideComponent(BlockListComponent, {
            set: {
                providers: [
                    { provide: BlockListDispatcher, useValue: {} }
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
    });
});
