import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDatasetsComponent } from './user-datasets.component';

describe('UserDatasetsComponent', () => {
  let component: UserDatasetsComponent;
  let fixture: ComponentFixture<UserDatasetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDatasetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDatasetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
