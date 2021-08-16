import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XdsHeaderbarComponent } from './xds-headerbar.component';

describe('XdsHeaderbarComponent', () => {
  let component: XdsHeaderbarComponent;
  let fixture: ComponentFixture<XdsHeaderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XdsHeaderbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XdsHeaderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
