import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListTotalComponent } from './product-list-total.component';

describe('ProductListTotalComponent', () => {
  let component: ProductListTotalComponent;
  let fixture: ComponentFixture<ProductListTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
