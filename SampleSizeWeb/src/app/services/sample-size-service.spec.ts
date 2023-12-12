import { TestBed } from '@angular/core/testing';

import { SampleSizeService } from './sample-size-service.service';

describe('SampleSizeService', () => {
  let service: SampleSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
