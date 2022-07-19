import { TestBed } from '@angular/core/testing';

import { PlottingScenesService } from './plotting-scenes.service';

describe('PlottingScenesService', () => {
  let service: PlottingScenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlottingScenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
