import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnactmentComponent } from './enactment.component';

describe('EnactmentComponent', () => {
  let component: EnactmentComponent;
  let fixture: ComponentFixture<EnactmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnactmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnactmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
