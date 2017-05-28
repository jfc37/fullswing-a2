import { ClassesState } from './classes.model';
import * as classes from './classes.actions';
import { containsId } from '../../../common/util/array.util';

export const initialState: ClassesState = {
    isLoading: null,
    errors: [],
    classes: []
};

export function classesReducer(state = initialState, action: classes.Actions): ClassesState {
    switch (action.type) {
        case classes.ADD_CLASSES: {
            return Object.assign({}, state, {
                classes: [
                    ...state.classes.filter(theClass => containsId(action.classes, theClass)),
                    ...action.classes
                ]
            });
        }

        default: {
            return state;
        }
    }
}
