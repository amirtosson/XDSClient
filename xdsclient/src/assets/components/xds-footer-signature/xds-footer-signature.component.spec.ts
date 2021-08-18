import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XdsFooterSignatureComponent } from './xds-footer-signature.component';

describe('XdsFooterSignatureComponent', () => {
  let component: XdsFooterSignatureComponent;
  let fixture: ComponentFixture<XdsFooterSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XdsFooterSignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XdsFooterSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
