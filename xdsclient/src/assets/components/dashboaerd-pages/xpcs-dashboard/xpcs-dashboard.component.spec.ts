import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpcsDashboardComponent } from './xpcs-dashboard.component';

describe('XpcsDashboardComponent', () => {
  let component: XpcsDashboardComponent;
  let fixture: ComponentFixture<XpcsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XpcsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XpcsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
