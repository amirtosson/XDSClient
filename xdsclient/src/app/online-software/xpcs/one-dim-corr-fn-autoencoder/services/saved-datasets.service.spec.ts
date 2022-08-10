import { TestBed } from '@angular/core/testing';

import { SavedDatasetsService } from './saved-datasets.service';

describe('SavedDatasetsService', () => {
  let service: SavedDatasetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedDatasetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
