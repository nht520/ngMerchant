import { TestBed } from '@angular/core/testing';

import { BesurlService } from './besurl.service';

describe('BesurlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BesurlService = TestBed.get(BesurlService);
    expect(service).toBeTruthy();
  });
});
