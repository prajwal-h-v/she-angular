import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepAccomodationsComponent } from './step-accomodations.component';

describe('StepAccomodationsComponent', () => {
  let component: StepAccomodationsComponent;
  let fixture: ComponentFixture<StepAccomodationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepAccomodationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepAccomodationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
