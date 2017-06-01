import { Block } from '../../../services/redux/blocks/blocks.model';
import { BlockModel } from '../../components/block-form/block-form.model';
import { LoadClassesForBlock } from '../../../services/redux/classes/classes.actions';
import * as blockActions from '../../../services/redux/blocks/blocks.actions';
import { AppState } from '../../../services/redux/app/app.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class BlockDetailsDispatcher {

    constructor(private _store: Store<AppState>) { }

    public initialise(id: number): void {
        this._store.dispatch(new blockActions.LoadSelectedBlock(id));
        this._store.dispatch(new LoadClassesForBlock(id));
    }

    public update(blockModel: BlockModel, id: number): void {
        const block = this.modelToBlock(blockModel, id);
        this._store.dispatch(new blockActions.UpdateBlock(block));
    }

    private modelToBlock(model: BlockModel, id: number): Block {
        return {
            id,
            name: model.name,
            startDate: model.startDate,
            endDate: model.endDate,
            isInviteOnly: model.isInviteOnly,
            minutesPerClass: model.minutesPerClass,
            numberOfClasses: model.numberOfClasses,
            classCapacity: model.classCapacity,
            teachers: model.teachers
        };
    }
}
