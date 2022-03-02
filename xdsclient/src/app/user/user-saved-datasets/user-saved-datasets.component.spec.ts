import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSavedDatasetsComponent } from './user-saved-datasets.component';

describe('UserSavedDatasetsComponent', () => {
  let component: UserSavedDatasetsComponent;
  let fixture: ComponentFixture<UserSavedDatasetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSavedDatasetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSavedDatasetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
