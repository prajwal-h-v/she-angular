import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SukanyaRegisterComponent } from './sukanya-register.component';

describe('SukanyaRegisterComponent', () => {
  let component: SukanyaRegisterComponent;
  let fixture: ComponentFixture<SukanyaRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SukanyaRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SukanyaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
