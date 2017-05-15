import { CurrentPassesState } from '../current-passes/current-passes-state.model';
import { UpcomingScheduleState } from '../upcoming-schedule/upcoming-schedule-state.model';
import { UserState } from '../user/user-state.model';

export interface AppState {
    user: UserState;
    upcomingSchedule: UpcomingScheduleState;
    currentPasses: CurrentPassesState;
};
