import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GisaxsDashboardComponent } from './gisaxs-dashboard.component';

describe('GisaxsDashboardComponent', () => {
  let component: GisaxsDashboardComponent;
  let fixture: ComponentFixture<GisaxsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GisaxsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GisaxsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
