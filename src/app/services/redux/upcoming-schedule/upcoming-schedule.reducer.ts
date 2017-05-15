import { UpcomingScheduleState } from './upcoming-schedule.model';
import * as upcomingSchedule from './upcoming-schedule.actions';

export const initialState: UpcomingScheduleState = {
    isLoading: null,
    errors: [],
    upcomingClasses: []
};

export function upcomingScheduleReducer(state = initialState, action: upcomingSchedule.Actions): UpcomingScheduleState {
    switch (action.type) {
        case upcomingSchedule.LOAD: {
            return Object.assign({}, state, {
                isLoading: true
            });
        }

        case upcomingSchedule.LOAD_SUCCEDED: {
            return Object.assign({}, state, {
                isLoading: false,
                upcomingClasses: action.classes
            });

        }

        case upcomingSchedule.LOAD_FAILED: {
            return Object.assign({}, state, {
               isLoading: false,
               errors: [
                   action.error
               ]
            });
        }

        default: {
            return state;
        }
    }
}
