import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFamilyDetailsComponent } from './add-family-details.component';

describe('AddFamilyDetailsComponent', () => {
  let component: AddFamilyDetailsComponent;
  let fixture: ComponentFixture<AddFamilyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFamilyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFamilyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
