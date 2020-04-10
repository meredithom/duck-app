import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {feedingSchedule} from './feeding-schedule';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FeedingScheduleService {

  constructor(private http: HttpClient) { }
}
