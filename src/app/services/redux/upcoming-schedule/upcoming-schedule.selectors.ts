import { UpcomingScheduleState } from './upcoming-schedule.model';
import { AppState } from '../app/app.model';
import { createSelector } from 'reselect';

export const getUpcomingScheduleState = (app: AppState) => app.upcomingSchedule;

const getErrors = (upcomingSchedule: UpcomingScheduleState) => upcomingSchedule.errors.length > 0;

export const getLoading =
    createSelector(getUpcomingScheduleState, (upcomingSchedule: UpcomingScheduleState) => upcomingSchedule.isLoading);

export const getHasErrored =
    createSelector(getUpcomingScheduleState, (upcomingSchedule: UpcomingScheduleState) => upcomingSchedule.errors.length > 0);

export const getUpcomingClasses =
    createSelector(getUpcomingScheduleState, (upcomingSchedule: UpcomingScheduleState) => upcomingSchedule.upcomingClasses);
