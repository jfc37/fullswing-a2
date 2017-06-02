import { ClassesEffects } from './classes/classes.effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { appReducer } from './app/app.reducer';
import { UserEffects } from './user/user.effects';
import { UpcomingScheduleEffects } from './upcoming-schedule/upcoming-schedule.effects';
import { CurrentPassesEffects } from './current-passes/current-passes.effects';
import { BlocksForEnrolmentsEffects } from './blocks-for-enrolment/blocks-for-enrolment.effects';
import { BlocksEffects } from './blocks/blocks.effects';
import { TeachersEffects } from './teachers/teachers.effects';

@NgModule({
    imports: [
        StoreModule.provideStore(appReducer),
        RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        EffectsModule.run(UserEffects),
        EffectsModule.run(UpcomingScheduleEffects),
        EffectsModule.run(CurrentPassesEffects),
        EffectsModule.run(BlocksForEnrolmentsEffects),
        EffectsModule.run(BlocksEffects),
        EffectsModule.run(ClassesEffects),
        EffectsModule.run(TeachersEffects),
    ]
})
export class ReduxModule { }
