import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepNavbarComponent } from './step-navbar.component';

describe('StepNavbarComponent', () => {
  let component: StepNavbarComponent;
  let fixture: ComponentFixture<StepNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
