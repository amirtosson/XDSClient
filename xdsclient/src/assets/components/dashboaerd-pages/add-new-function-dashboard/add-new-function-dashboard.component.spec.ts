import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFunctionDashboardComponent } from './add-new-function-dashboard.component';

describe('AddNewFunctionDashboardComponent', () => {
  let component: AddNewFunctionDashboardComponent;
  let fixture: ComponentFixture<AddNewFunctionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewFunctionDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewFunctionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
