import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedingScheduleComponent } from './feeding-schedule.component';

describe('FeedingScheduleComponent', () => {
  let component: FeedingScheduleComponent;
  let fixture: ComponentFixture<FeedingScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedingScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedingScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
