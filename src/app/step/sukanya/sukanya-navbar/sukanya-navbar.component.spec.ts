import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SukanyaNavbarComponent } from './sukanya-navbar.component';

describe('SukanyaNavbarComponent', () => {
  let component: SukanyaNavbarComponent;
  let fixture: ComponentFixture<SukanyaNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SukanyaNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SukanyaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
