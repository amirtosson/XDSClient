import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XdsNewsHighlightsComponent } from './xds-news-highlights.component';

describe('XdsNewsHighlightsComponent', () => {
  let component: XdsNewsHighlightsComponent;
  let fixture: ComponentFixture<XdsNewsHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XdsNewsHighlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XdsNewsHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
