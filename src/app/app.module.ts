import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FeedingScheduleComponent } from './feeding-schedule/feeding-schedule.component';
import { AppRoutingModule } from './app-routing.module';
import { FeedingScheduleFormComponent } from './feeding-schedule-form/feeding-schedule-form.component';
import { HomeComponent } from './home/home.component';
import { FormSubmissionConfirmationComponent } from './form-submission-confirmation/form-submission-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedingScheduleComponent,
    FeedingScheduleFormComponent,
    HomeComponent,
    FormSubmissionConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
