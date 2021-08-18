import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XdsHeaderSignatureComponent } from './xds-header-signature.component';

describe('XdsHeaderSignatureComponent', () => {
  let component: XdsHeaderSignatureComponent;
  let fixture: ComponentFixture<XdsHeaderSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XdsHeaderSignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XdsHeaderSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
