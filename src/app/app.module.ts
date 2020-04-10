import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeedingScheduleComponent } from './feeding-schedule/feeding-schedule.component';
import { AppRoutingModule } from './app-routing.module';
import { FeedingScheduleFormComponent } from './feeding-schedule-form/feeding-schedule-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedingScheduleComponent,
    FeedingScheduleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
