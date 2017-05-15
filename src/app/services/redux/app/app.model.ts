import { CurrentPassesState } from '../current-passes/current-passes.model';
import { UpcomingScheduleState } from '../upcoming-schedule/upcoming-schedule.model';
import { UserState } from '../user/user.model';

export interface AppState {
    user: UserState;
    upcomingSchedule: UpcomingScheduleState;
    currentPasses: CurrentPassesState;
};
