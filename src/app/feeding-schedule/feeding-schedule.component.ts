import { Component, OnInit } from '@angular/core';
import { FeedingSchedule } from '../models/feeding-schedule';
import { FeedingScheduleService } from '../services/feeding-schedule.service';


@Component({
  selector: 'app-feeding-schedule',
  templateUrl: './feeding-schedule.component.html',
  styleUrls: ['./feeding-schedule.component.css']
})



export class FeedingScheduleComponent implements OnInit {

  headers = [
    '_id',
    'feedingTime',
    'feedingLocation',
    'foodType',
    'foodQuantity',
    'numberOfDucks'

  ];

  feedingSchedules = [];


  constructor(private feedingScheduleService: FeedingScheduleService) {
  }

  async ngOnInit() {
    let res = await this.feedingScheduleService.get().then();
    this.feedingSchedules = res;
  }

}
