import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Store } from '@ngrx/store';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
    let fixture: ComponentFixture<DashboardComponent>;
    let comp: DashboardComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                DashboardComponent
            ],
            providers: [
                {provide: Store, value: {}}
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
    });

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(DashboardComponent);
            comp = fixture.componentInstance;
        });
    }));

    it('should exist', () => {
        expect(comp).toBeTruthy();
    });
});
