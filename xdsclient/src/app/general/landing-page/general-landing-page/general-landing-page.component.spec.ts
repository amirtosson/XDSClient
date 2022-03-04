import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLandingPageComponent } from './general-landing-page.component';

describe('GeneralLandingPageComponent', () => {
  let component: GeneralLandingPageComponent;
  let fixture: ComponentFixture<GeneralLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
