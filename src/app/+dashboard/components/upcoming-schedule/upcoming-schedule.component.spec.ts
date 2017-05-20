import {
    expectElementDoesNotExist,
    expectElementExists,
    expectNumberOfElementExists
} from '../../../common/unit-test/elements.spec';
import { UpcomingClassModel, UpcomingSchduleModel } from './upcoming-schedule.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UpcomingScheduleComponent } from './upcoming-schedule.component';

describe('UpcomingScheduleComponent', () => {
    let fixture: ComponentFixture<UpcomingScheduleComponent>;
    let comp: UpcomingScheduleComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                UpcomingScheduleComponent
            ],
            providers: [],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
    });

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(UpcomingScheduleComponent);
            comp = fixture.componentInstance;
            comp.model = {
                upcomingClasses: []
            } as UpcomingSchduleModel;
        });
    }));

    it('should exist', () => {
        fixture.detectChanges();
        expect(comp).toBeTruthy();
    });

    describe('when loading', () => {
        beforeEach(() => {
            comp.model.isLoading = true;
            fixture.detectChanges();
        });

        it('should show loading', () => {
            expectElementExists(fixture, '.loading');
        });

        it('should not show error', () => {
            expectElementDoesNotExist(fixture, '.error');
        });

        it('should not show nothing scheduled', () => {
            expectElementDoesNotExist(fixture, '.nothing-scheduled');
        });

        it('should not show upcoming classes', () => {
            expectElementDoesNotExist(fixture, '.upcoming-class');
        });
    });

    describe('when errored', () => {
        beforeEach(() => {
            comp.model.hasErrored = true;
            fixture.detectChanges();
        });

        it('should show error', () => {
            expectElementExists(fixture, '.error');
        });

        it('should not show loading', () => {
            expectElementDoesNotExist(fixture, '.loading');
        });

        it('should not show nothing scheduled', () => {
            expectElementDoesNotExist(fixture, '.nothing-scheduled');
        });

        it('should not show upcoming classes', () => {
            expectElementDoesNotExist(fixture, '.upcoming-class');
        });
    });

    describe('when nothing scheduled', () => {
        beforeEach(() => {
            comp.model.upcomingClasses = [];
            fixture.detectChanges();
        });

        it('should show nothing scheduled', () => {
            expectElementExists(fixture, '.nothing-scheduled');
        });

        it('should not show error', () => {
            expectElementDoesNotExist(fixture, '.error');
        });

        it('should not show loading', () => {
            expectElementDoesNotExist(fixture, '.loading');
        });

        it('should not show upcoming classes', () => {
            expectElementDoesNotExist(fixture, '.upcoming-class');
        });
    });

    describe('when there are upcoming classes', () => {
        beforeEach(() => {
            comp.model.upcomingClasses = [
                {} as UpcomingClassModel,
                {} as UpcomingClassModel
            ];
            fixture.detectChanges();
        });

        it('should show all upcoming classes', () => {
            const expectedNumber = comp.model.upcomingClasses.length;
            expectNumberOfElementExists(fixture, '.upcoming-class', expectedNumber);
        });

        it('should not show error', () => {
            expectElementDoesNotExist(fixture, '.error');
        });

        it('should not show loading', () => {
            expectElementDoesNotExist(fixture, '.loading');
        });

        it('should not show nothing scheduled', () => {
            expectElementDoesNotExist(fixture, '.nothing-scheduled');
        });
    });
});
