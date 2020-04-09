import { TestBed } from '@angular/core/testing';

import { FeedingScheduleService } from './feeding-schedule.service';

describe('FeedingScheduleService', () => {
  let service: FeedingScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedingScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
