import { DashboardSelector } from './dashboard.selector';
import { DashboardDispatcher } from './dashboard.dispatcher';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Store } from '@ngrx/store';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
    let fixture: ComponentFixture<DashboardComponent>;
    let comp: DashboardComponent;
    let dispatcher: DashboardDispatcher;
    let selector: DashboardSelector;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                DashboardComponent
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).overrideComponent(DashboardComponent, {
            set: {
                providers: [
                    { provide: DashboardDispatcher, useValue: {} },
                    { provide: DashboardSelector, useValue: {} }
                ]
            }
        });
    });

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(DashboardComponent);

            dispatcher = fixture.debugElement.injector.get(DashboardDispatcher);
            dispatcher.initialise = jasmine.createSpy('initialise');

            selector = fixture.debugElement.injector.get(DashboardSelector);
            selector.getCurrentPasses = jasmine.createSpy('getCurrentPasses');
            selector.getUpcomingSchedule = jasmine.createSpy('getUpcomingSchedule');

            comp = fixture.componentInstance;
        });
    }));

    it('should exist', () => {
        expect(comp).toBeTruthy();
    });

    describe('onInit', () => {
        beforeEach(() => {
            comp.ngOnInit();
        });

        it('should fire initalisation actions', () => {
            expect(dispatcher.initialise).toHaveBeenCalled();
        });

        it('should subscribe to upcoming schedule', () => {
            expect(selector.getUpcomingSchedule).toHaveBeenCalled();
        });

        it('should subscribe to current passes', () => {
            expect(selector.getCurrentPasses).toHaveBeenCalled();
        });
    });
});
