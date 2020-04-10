import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FeedingSchedule} from '../models/feeding-schedule';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FeedingScheduleService {

  constructor(private http: HttpClient) { }

  add(duckFormData): Promise<any> {
    return this.http.post<any>(`http://localhost:3000/api/feedingSchedule`, duckFormData, {}).toPromise();
  }
}
