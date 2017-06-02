import { TeachersState } from './teachers.model';
import * as teachers from './teachers.actions';
import { containsId } from '../../../common/util/array.util';

export const initialState: TeachersState = {
    isLoading: null,
    errors: [],
    teachers: []
};

export function teachersReducer(state = initialState, action: teachers.Actions): TeachersState {
    switch (action.type) {
        case teachers.LOAD: {
            return Object.assign({}, state, {
                isLoading: true
            });
        }

        case teachers.LOAD_SUCCEDED: {
            return Object.assign({}, state, {
                isLoading: false,
                errors: []
            });
        }

        case teachers.LOAD_FAILED: {
            return Object.assign({}, state, {
                isLoading: false,
                errors: [
                    ...state.errors,
                    action.error
                ]
            });
        }

        case teachers.ADD_TEACHERS: {
            return Object.assign({}, state, {
                teachers: [
                    ...state.teachers.filter(teacher => containsId(action.teachers, teacher)),
                    ...action.teachers
                ]
            });
        }

        default: {
            return state;
        }
    }
}
