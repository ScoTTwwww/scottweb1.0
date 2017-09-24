import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEnactmentComponent } from './product-enactment.component';

describe('ProductEnactmentComponent', () => {
  let component: ProductEnactmentComponent;
  let fixture: ComponentFixture<ProductEnactmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEnactmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEnactmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
