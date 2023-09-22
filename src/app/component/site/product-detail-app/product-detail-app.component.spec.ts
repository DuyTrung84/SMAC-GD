import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailAppComponent } from './product-detail-app.component';

describe('ProductDetailAppComponent', () => {
  let component: ProductDetailAppComponent;
  let fixture: ComponentFixture<ProductDetailAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
