import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XdsToolBoxComponent } from './xds-tool-box.component';

describe('XdsToolBoxComponent', () => {
  let component: XdsToolBoxComponent;
  let fixture: ComponentFixture<XdsToolBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XdsToolBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XdsToolBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
