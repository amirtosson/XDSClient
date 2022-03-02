import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecentActivitiesComponent } from './user-recent-activities.component';

describe('UserRecentActivitiesComponent', () => {
  let component: UserRecentActivitiesComponent;
  let fixture: ComponentFixture<UserRecentActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecentActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecentActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
