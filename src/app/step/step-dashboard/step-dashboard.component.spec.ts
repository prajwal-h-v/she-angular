import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepDashboardComponent } from './step-dashboard.component';

describe('StepDashboardComponent', () => {
  let component: StepDashboardComponent;
  let fixture: ComponentFixture<StepDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
