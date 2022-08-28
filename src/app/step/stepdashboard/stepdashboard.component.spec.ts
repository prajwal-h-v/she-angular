import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepdashboardComponent } from './stepdashboard.component';

describe('StepdashboardComponent', () => {
  let component: StepdashboardComponent;
  let fixture: ComponentFixture<StepdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
