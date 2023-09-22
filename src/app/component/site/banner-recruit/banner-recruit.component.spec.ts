import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerRecruitComponent } from './banner-recruit.component';

describe('BannerRecruitComponent', () => {
  let component: BannerRecruitComponent;
  let fixture: ComponentFixture<BannerRecruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerRecruitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerRecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
