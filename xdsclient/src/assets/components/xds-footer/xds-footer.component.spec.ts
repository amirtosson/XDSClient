import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XdsFooterComponent } from './xds-footer.component';

describe('XdsFooterComponent', () => {
  let component: XdsFooterComponent;
  let fixture: ComponentFixture<XdsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XdsFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XdsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
