import { Component, OnInit, Input } from '@angular/core';
import { FeedingSchedule } from '../feeding-schedule';

@Component({
  selector: 'app-feeding-schedule-form',
  templateUrl: './feeding-schedule-form.component.html',
  styleUrls: ['./feeding-schedule-form.component.css']
})
export class FeedingScheduleFormComponent implements OnInit {
@Input() feedingSchedule: FeedingSchedule;

  constructor() { }

  ngOnInit(): void {
  }

}
