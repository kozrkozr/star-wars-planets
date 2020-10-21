import {CoreModule} from '@app/core/core.module';
import {SimpleNotificationsModule} from 'angular2-notifications';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SimpleNotificationsModule.forRoot({
      position: ['top', 'right'],
      timeOut: 6000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
      preventDuplicates: true,
      preventLastDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
