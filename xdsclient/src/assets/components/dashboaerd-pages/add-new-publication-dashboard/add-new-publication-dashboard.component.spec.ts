import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPublicationDashboardComponent } from './add-new-publication-dashboard.component';

describe('AddNewPublicationDashboardComponent', () => {
  let component: AddNewPublicationDashboardComponent;
  let fixture: ComponentFixture<AddNewPublicationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewPublicationDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPublicationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
