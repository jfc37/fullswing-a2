import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, NoPreloading } from '@angular/router';
import { ReduxModule } from './services/redux/redux.module';
import { ApiModule } from './services/apis/api.module';
import { CommonModule } from './common/common.module';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { NoContentComponent } from './no-content';

import '../styles/styles.scss';
import '../styles/headings.css';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NoContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: NoPreloading }),
    ApiModule,
    ReduxModule,
    CommonModule
  ]
})
export class AppModule { }
