import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesComponent } from './bikes.component';

describe('BikesComponent', () => {
  let component: BikesComponent;
  let fixture: ComponentFixture<BikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
