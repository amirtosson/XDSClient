import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDimCorrFnAutoencoderComponent } from './one-dim-corr-fn-autoencoder.component';

describe('OneDimCorrFnAutoencoderComponent', () => {
  let component: OneDimCorrFnAutoencoderComponent;
  let fixture: ComponentFixture<OneDimCorrFnAutoencoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneDimCorrFnAutoencoderComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDimCorrFnAutoencoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
