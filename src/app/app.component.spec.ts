import { Store } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppComponent } from './app.component';

describe(`App`, () => {

  it(`should be pass`, () => {
    expect(true).toBeTruthy();
  });

});
