import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeedingScheduleComponent } from './feeding-schedule/feeding-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedingScheduleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
