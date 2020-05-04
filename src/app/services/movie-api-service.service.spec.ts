import { TestBed } from '@angular/core/testing';

import { MovieApiServiceService } from './movie-api-service.service';

describe('MovieApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieApiServiceService = TestBed.get(MovieApiServiceService);
    expect(service).toBeTruthy();
  });
});
