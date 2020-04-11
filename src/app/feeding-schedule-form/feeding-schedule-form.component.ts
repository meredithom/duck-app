import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FeedingScheduleService } from '../services/feeding-schedule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feeding-schedule-form',
  templateUrl: './feeding-schedule-form.component.html',
  styleUrls: ['./feeding-schedule-form.component.css']
})
export class FeedingScheduleFormComponent implements OnInit {
  duckForm;

  constructor(
    private feedingScheduleService: FeedingScheduleService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.duckForm = this.formBuilder.group({
      feedingTime: '',
      foodType: '',
      feedingLocation: '',
      numberOfDucks: '',
      foodQuantity: ''
    });
  }
  ngOnInit(): void {
  }

  async onSubmit(formData) {
    let res = await this.feedingScheduleService.add(formData).then();
    if (res) {
      this.router.navigate(['form-submission']);
    }
  }
}
