import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningLandingPageComponent } from './e-learning-landing-page.component';

describe('ELearningLandingPageComponent', () => {
  let component: ELearningLandingPageComponent;
  let fixture: ComponentFixture<ELearningLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELearningLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
