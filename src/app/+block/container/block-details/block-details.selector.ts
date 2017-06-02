import { BlockFormModel } from '../../components/block-form/block-form.model';
import { ClassListModel } from '../../components/class-list/class-list.model';
import { BlockSummaryModel } from '../../components/block-summary/block-summary.model';
import * as blocks from '../../../services/redux/blocks/blocks.selectors';
import * as teachers from '../../../services/redux/teachers/teachers.selectors';
import * as classes from '../../../services/redux/classes/classes.selectors';
import { AppState } from '../../../services/redux/app/app.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BlockDetailsSelector {
    constructor(private _store: Store<AppState>) { }

    public getClassListModel(): Observable<ClassListModel> {
        const isLoading$ = this._store.select(classes.getLoading);
        const hasErrored$ = this._store.select(classes.getHasErrored);
        const classes$ = this._store.select(classes.getClassesForSelectedBlock);

        return Observable.combineLatest(isLoading$, hasErrored$, classes$)
            .map(([isLoading, hasErrored, classes]) => ({
                isLoading,
                hasErrored,
                classes: classes.map(c => ({
                    id: c.id,
                    name: c.name,
                    attendance: c.actualStudents.length,
                    date: c.startTime
                }))
            }));
    }

    public getSummaryModel(): Observable<BlockSummaryModel> {
        const isLoading$ = this._store.select(blocks.getLoading);
        const hasErrored$ = this._store.select(blocks.getHasErrored);
        const selectedBlock$ = this._store.select(blocks.getSelectedBlock);
        const teachers$ = this._store.select(teachers.getTeachersForSelectedBlock);

        return Observable.combineLatest(isLoading$, hasErrored$, selectedBlock$, teachers$)
            .map(([isLoading, hasErrored, selectedBlock, teachers]) => (selectedBlock
            ? {
                isLoading,
                hasErrored,
                name: selectedBlock.name,
                startDate: selectedBlock.startDate,
                endDate: selectedBlock.endDate,
                inviteOnly: selectedBlock.isInviteOnly,
                teachers: teachers.map(t => t.fullName),
                numberOfStudentsRegistered: selectedBlock.enroledStudents.length
            }
            : {
                isLoading,
                hasErrored
            }));
    }

    public getBlockFormModel(): Observable<BlockFormModel> {
        const blockState$ = this._store.select(blocks.getBlocksState);
        const teachersState$ = this._store.select(teachers.getTeachersState);

        return Observable.combineLatest(blockState$, teachersState$)
            .map(([blockState, teachersState]) => ({
                isLoading: blockState.isLoading || teachersState.isLoading,
                hasErrored: [...blockState.errors, ...teachersState.errors].length > 0,
                hasSaveErrored: !!blockState.saveError,
                validationMessages: blockState.validation.map(v => v.message),
                teachers: teachersState.teachers.map(teacher => ({
                    name: teacher.fullName,
                    id: teacher.id
                })),
                block: blockState.selectedBlock ? {
                    name: blockState.selectedBlock.name,
                    startDate: blockState.selectedBlock.startDate,
                    endDate: blockState.selectedBlock.endDate,
                    isInviteOnly: blockState.selectedBlock.isInviteOnly,
                    minutesPerClass: blockState.selectedBlock.minutesPerClass,
                    numberOfClasses: blockState.selectedBlock.numberOfClasses,
                    classCapacity: blockState.selectedBlock.classCapacity,
                    teacher: blockState.selectedBlock.teachers[0]
                } : undefined
            }));
    }

    public getTitle() {
        return this._store.select(blocks.getSelectedBlock)
            .filter(block => !!block)
            .map(block => block.name);
    }
}
