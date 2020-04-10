import { Component, OnInit } from '@angular/core';
import { FeedingSchedule } from '../feeding-schedule';

//testing
import { FeedingSchedules } from '../mock-feeding-schedules';

@Component({
  selector: 'app-feeding-schedule',
  templateUrl: './feeding-schedule.component.html',
  styleUrls: ['./feeding-schedule.component.css']
})



export class FeedingScheduleComponent implements OnInit {

  headers = [
    'id',
    'feedingTime',
    'feedingLocation',
    'foodType',
    'foodQuantity',
    'numberOfDucks'

  ];

  feedingSchedules = FeedingSchedules;


  constructor() { }

  ngOnInit(): void {
  }

}
