import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineAnalysisLandingPageComponent } from './online-analysis-landing-page.component';

describe('OnlineAnalysisLandingPageComponent', () => {
  let component: OnlineAnalysisLandingPageComponent;
  let fixture: ComponentFixture<OnlineAnalysisLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineAnalysisLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineAnalysisLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
