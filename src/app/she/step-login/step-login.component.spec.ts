import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepLoginComponent } from './step-login.component';

describe('StepLoginComponent', () => {
  let component: StepLoginComponent;
  let fixture: ComponentFixture<StepLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
