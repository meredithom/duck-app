import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedingScheduleComponent } from './feeding-schedule/feeding-schedule.component';
import { HomeComponent } from './home/home.component';
import { FeedingScheduleFormComponent } from './feeding-schedule-form/feeding-schedule-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'list',
    pathMatch: 'full',
    component: FeedingScheduleComponent
  },
  {
    path: 'duck-form',
    pathMatch: 'full',
    component: FeedingScheduleFormComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
