import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDatasetDetailsComponent } from './edit-dataset-details.component';

describe('EditDatasetDetailsComponent', () => {
  let component: EditDatasetDetailsComponent;
  let fixture: ComponentFixture<EditDatasetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDatasetDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDatasetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
