import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineSoftwarePageComponent } from './online-software-page.component';

describe('OnlineSoftwarePageComponent', () => {
  let component: OnlineSoftwarePageComponent;
  let fixture: ComponentFixture<OnlineSoftwarePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineSoftwarePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineSoftwarePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
