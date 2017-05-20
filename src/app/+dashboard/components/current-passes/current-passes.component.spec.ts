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

import { CurrentPassesComponent, CurrentPassesModel, PassModel } from './';

describe('CurrentPassesComponent', () => {
    let fixture: ComponentFixture<CurrentPassesComponent>;
    let comp: CurrentPassesComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                CurrentPassesComponent
            ],
            providers: [],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
    });

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(CurrentPassesComponent);
            comp = fixture.componentInstance;
            comp.model = {
                passes: []
            } as CurrentPassesModel;
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
            expectElementDoesNotExist(fixture, '.empty-collection');
        });

        it('should not show current passes', () => {
            expectElementDoesNotExist(fixture, '.valid-pass');
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
            expectElementDoesNotExist(fixture, '.empty-collection');
        });

        it('should not show current passes', () => {
            expectElementDoesNotExist(fixture, '.valid-pass');
        });
    });

    describe('when nothing scheduled', () => {
        beforeEach(() => {
            comp.model.passes = [];
            fixture.detectChanges();
        });

        it('should show nothing scheduled', () => {
            expectElementExists(fixture, '.empty-collection');
        });

        it('should not show error', () => {
            expectElementDoesNotExist(fixture, '.error');
        });

        it('should not show loading', () => {
            expectElementDoesNotExist(fixture, '.loading');
        });

        it('should not show current passes', () => {
            expectElementDoesNotExist(fixture, '.valid-pass');
        });
    });

    describe('when there are current passes', () => {
        beforeEach(() => {
            comp.model.passes = [
                {} as PassModel,
                {} as PassModel
            ];
            fixture.detectChanges();
        });

        it('should show all current passes', () => {
            const expectedNumber = comp.model.passes.length;
            expectNumberOfElementExists(fixture, '.valid-pass', expectedNumber);
        });

        it('should not show error', () => {
            expectElementDoesNotExist(fixture, '.error');
        });

        it('should not show loading', () => {
            expectElementDoesNotExist(fixture, '.loading');
        });

        it('should not show nothing scheduled', () => {
            expectElementDoesNotExist(fixture, '.empty-collection');
        });
    });
});
