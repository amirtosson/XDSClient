import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlottingSceneComponent } from './plotting-scene.component';

describe('PlottingSceneComponent', () => {
  let component: PlottingSceneComponent;
  let fixture: ComponentFixture<PlottingSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlottingSceneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlottingSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
