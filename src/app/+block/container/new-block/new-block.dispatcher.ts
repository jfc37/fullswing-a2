import { LoadTeachers } from '../../../services/redux/teachers/teachers.actions';
import { Block } from '../../../services/redux/blocks/blocks.model';
import { BlockModel } from '../../components/block-form/block-form.model';
import * as blockActions from '../../../services/redux/blocks/blocks.actions';
import { AppState } from '../../../services/redux/app/app.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class NewBlockDispatcher {

    constructor(private _store: Store<AppState>) { }

    public initialise(): void {
        this._store.dispatch(new LoadTeachers());
    }

    public create(blockModel: BlockModel): void {
        const block = this.modelToBlock(blockModel);
        this._store.dispatch(new blockActions.CreateBlock(block));
    }

    private modelToBlock(model: BlockModel): Block {
        return {
            id: undefined,
            name: model.name,
            startDate: model.startDate,
            endDate: model.endDate,
            isInviteOnly: model.isInviteOnly,
            minutesPerClass: model.minutesPerClass,
            numberOfClasses: model.numberOfClasses,
            classCapacity: model.classCapacity,
            teachers: [model.teacher]
        };
    }
}
