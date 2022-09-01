import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingngoComponent } from './pendingngo.component';

describe('PendingngoComponent', () => {
  let component: PendingngoComponent;
  let fixture: ComponentFixture<PendingngoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingngoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingngoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
