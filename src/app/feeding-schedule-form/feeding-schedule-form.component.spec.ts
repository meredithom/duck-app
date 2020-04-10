import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedingScheduleFormComponent } from './feeding-schedule-form.component';

describe('FeedingScheduleFormComponent', () => {
  let component: FeedingScheduleFormComponent;
  let fixture: ComponentFixture<FeedingScheduleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedingScheduleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedingScheduleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
