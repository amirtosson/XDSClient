import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawDataManipulationComponent } from './raw-data-manipulation.component';

describe('RawDataManipulationComponent', () => {
  let component: RawDataManipulationComponent;
  let fixture: ComponentFixture<RawDataManipulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawDataManipulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RawDataManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
