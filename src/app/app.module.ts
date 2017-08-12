import { ReduxModule } from './services/redux/redux.module';
import { NoContentComponent } from './no-content';
import { ApiModule } from './services/apis/api.module';
import { CommonModule } from './common/common.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoPreloading, RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ROUTES } from './app.routes';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NoContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: NoPreloading }),
    ApiModule,
    ReduxModule,
    CommonModule
  ]
})
export class AppModule { }
