import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmissionConfirmationComponent } from './form-submission-confirmation.component';

describe('FormSubmissionConfirmationComponent', () => {
  let component: FormSubmissionConfirmationComponent;
  let fixture: ComponentFixture<FormSubmissionConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSubmissionConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSubmissionConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
