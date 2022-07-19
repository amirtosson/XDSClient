import { TestBed } from '@angular/core/testing';

import { SimulatedDatasetService } from './simulated-dataset.service';

describe('SimulatedDatasetService', () => {
  let service: SimulatedDatasetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulatedDatasetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
