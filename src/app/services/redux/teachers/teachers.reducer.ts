import { TeachersState } from './teachers.model';
import * as teachers from './teachers.actions';

export const initialState: TeachersState = {
    isLoading: null,
    errors: [],
    teachers: []
};

export function teachersReducer(state = initialState, action: teachers.Actions): TeachersState {
    switch (action.type) {
        case teachers.ADD_TEACHERS: {
            return Object.assign({}, state, {
                teachers: [
                    ...state.teachers.filter(teacher => action.teachers.map(t => t.id).indexOf(teacher.id) === -1),
                    ...action.teachers
                ]
            });
        }

        default: {
            return state;
        }
    }
}
