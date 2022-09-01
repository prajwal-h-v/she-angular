import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepAccomodationComponent } from './step-accomodation.component';

describe('StepAccomodationComponent', () => {
  let component: StepAccomodationComponent;
  let fixture: ComponentFixture<StepAccomodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepAccomodationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepAccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
