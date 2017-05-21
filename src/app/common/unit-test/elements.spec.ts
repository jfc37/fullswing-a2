import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export function expectNumberOfElementExists(
    fixture: ComponentFixture<any>,
    selector: string,
    expectedNumber: number): void {
    const elements = getElements(fixture, selector);
    expect(elements).toBeTruthy();
    expect(elements.length).toBe(expectedNumber);
}

export function expectElementExists(fixture: ComponentFixture<any>, selector: string): void {
    const el = getElement(fixture, selector);
    expect(el).toBeTruthy();
}

export function expectElementDoesNotExist(fixture: ComponentFixture<any>, selector: string): void {
    const el = getElement(fixture, selector);
    expect(el).toBeNull();
}

function getElement(fixture: ComponentFixture<any>, selector: string): DebugElement {
    return fixture.debugElement.query(By.css(selector));
}

function getElements(fixture: ComponentFixture<any>, selector: string): DebugElement[] {
    return fixture.debugElement.queryAll(By.css(selector));
}
