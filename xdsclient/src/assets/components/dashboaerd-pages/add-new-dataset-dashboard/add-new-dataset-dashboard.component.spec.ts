import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDatasetDashboardComponent } from './add-new-dataset-dashboard.component';

describe('AddNewDatasetDashboardComponent', () => {
  let component: AddNewDatasetDashboardComponent;
  let fixture: ComponentFixture<AddNewDatasetDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewDatasetDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDatasetDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
