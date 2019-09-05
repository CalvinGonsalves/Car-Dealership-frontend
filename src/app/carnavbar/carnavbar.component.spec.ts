import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnavbarComponent } from './carnavbar.component';

describe('CarnavbarComponent', () => {
  let component: CarnavbarComponent;
  let fixture: ComponentFixture<CarnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
