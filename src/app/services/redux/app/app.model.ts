import { BlocksState } from '../blocks/blocks.model';
import { BlocksForEnrolmentState } from '../blocks-for-enrolment/blocks-for-enrolment.model';
import { CurrentPassesState } from '../current-passes/current-passes.model';
import { UpcomingScheduleState } from '../upcoming-schedule/upcoming-schedule.model';
import { UserState } from '../user/user.model';

export interface AppState {
    user: UserState;
    upcomingSchedule: UpcomingScheduleState;
    currentPasses: CurrentPassesState;
    blocksForEnrolment: BlocksForEnrolmentState;
    blocks: BlocksState;
}
