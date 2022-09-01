import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepProfileComponent } from './step-profile.component';

describe('StepProfileComponent', () => {
  let component: StepProfileComponent;
  let fixture: ComponentFixture<StepProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
