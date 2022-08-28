import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSukanyaComponent } from './step-sukanya.component';

describe('StepSukanyaComponent', () => {
  let component: StepSukanyaComponent;
  let fixture: ComponentFixture<StepSukanyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepSukanyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepSukanyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
