import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRecruitComponent } from './content-recruit.component';

describe('ContentRecruitComponent', () => {
  let component: ContentRecruitComponent;
  let fixture: ComponentFixture<ContentRecruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentRecruitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentRecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
