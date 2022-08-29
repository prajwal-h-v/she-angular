import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SukanyaHomeComponent } from './sukanya-home.component';

describe('SukanyaHomeComponent', () => {
  let component: SukanyaHomeComponent;
  let fixture: ComponentFixture<SukanyaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SukanyaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SukanyaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
