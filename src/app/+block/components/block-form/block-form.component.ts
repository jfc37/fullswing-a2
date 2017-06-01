import { BlockFormModel, BlockModel } from './block-form.model';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'fs-block-form',
    template: `
        <h4>BLOCK FORM</h4>
        <pre>{{model | json}}</pre>
        <div *ngIf="model.isLoading">Loading...</div>
        <div *ngIf="model.hasErrored">Oops, block failed to load</div>
        <div *ngIf="model.hasSaveErrored">Oops, an error occurred while saving block</div>
        <div *ngIf="shouldDisplay()">
            <form [formGroup]="form" 
                  (ngSubmit)="submit($event)" novalidate>
                <label class="center-block">Name:
                    <input class="form-control" 
                           formControlName="name">
                </label>
                <label class="center-block">Start date:
                    <input class="form-control" 
                           formControlName="startDate">
                </label>
                <label class="center-block">Minutes per class:
                    <input class="form-control" 
                           formControlName="minutesPerClass">
                </label>
                <label class="center-block">Number of classes:
                    <input class="form-control" 
                           formControlName="numberOfClasses">
                </label>
                <label class="center-block">Class capacity:
                    <input class="form-control" 
                           formControlName="classCapacity">
                </label>
                <label class="center-block">Invite only:
                    <input class="form-control"
                            type="checkbox"
                           formControlName="isInviteOnly">
                </label>

                <button>Save</button>
            </form>
        </div>
    `
})
export class BlockFormComponent implements OnInit, OnChanges {

    @Input() public model: BlockFormModel;

    @Output() public onSubmit = new EventEmitter<BlockModel>();

    public form: FormGroup;

    constructor(private _formBuilder: FormBuilder) {}

    public ngOnInit(): void {
        this.form = this._formBuilder.group({
            name: [],
            startDate: [],
            minutesPerClass: [],
            numberOfClasses: [],
            classCapacity: [],
            isInviteOnly: [],
        });
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.model && !changes.model.isFirstChange() && changes.model.currentValue.block) {
            this.form.patchValue(changes.model.currentValue.block);
        }
    }

    public shouldDisplay(): boolean {
        return !this.model.isLoading && !this.model.hasErrored;
    }

    public submit(event: Event): void {
        event.preventDefault();

        const updatedBlock = Object.assign({}, this.model.block, this.form.value);
        this.onSubmit.emit(updatedBlock);
    }
}
