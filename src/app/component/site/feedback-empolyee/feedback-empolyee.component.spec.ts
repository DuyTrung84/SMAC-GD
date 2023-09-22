import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackEmpolyeeComponent } from './feedback-empolyee.component';

describe('FeedbackEmpolyeeComponent', () => {
  let component: FeedbackEmpolyeeComponent;
  let fixture: ComponentFixture<FeedbackEmpolyeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackEmpolyeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackEmpolyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
