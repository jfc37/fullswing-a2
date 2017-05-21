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

@NgModule({
    imports: [
        StoreModule.provideStore(appReducer),
        RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        EffectsModule.run(UserEffects),
        EffectsModule.run(UpcomingScheduleEffects),
        EffectsModule.run(CurrentPassesEffects),
        EffectsModule.run(BlocksForEnrolmentsEffects)
    ]
})
export class ReduxModule { }
