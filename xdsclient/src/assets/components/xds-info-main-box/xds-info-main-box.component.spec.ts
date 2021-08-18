import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XdsInfoMainBoxComponent } from './xds-info-main-box.component';

describe('XdsInfoMainBoxComponent', () => {
  let component: XdsInfoMainBoxComponent;
  let fixture: ComponentFixture<XdsInfoMainBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XdsInfoMainBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XdsInfoMainBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
