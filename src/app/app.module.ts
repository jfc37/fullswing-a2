import { ApiModule } from './services/apis/api.module';
import { BlocksForEnrolmentsEffects } from './services/redux/blocks-for-enrolment/blocks-for-enrolment.effects';
import { CurrentPassesEffects } from './services/redux/current-passes/current-passes.effects';
import { UpcomingScheduleEffects } from './services/redux/upcoming-schedule/upcoming-schedule.effects';
import { UserEffects } from './services/redux/user/user.effects';
import { userReducer } from './services/redux/user/user.reducer';
import { appReducer } from './services/redux/app/app.reducer';
import { CommonModule } from './common/common.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules,
  NoPreloading
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { NoContentComponent } from './no-content';

import '../styles/styles.scss';
import '../styles/headings.css';

import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NoContentComponent,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: NoPreloading }),
    ApiModule,
    CommonModule,

    StoreModule.provideStore(appReducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(UserEffects),
    EffectsModule.run(UpcomingScheduleEffects),
    EffectsModule.run(CurrentPassesEffects),
    EffectsModule.run(BlocksForEnrolmentsEffects),
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule { }
