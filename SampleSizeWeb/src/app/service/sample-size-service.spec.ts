import { TestBed } from '@angular/core/testing';

import { SampleSizeServiceService } from './sample-size-service.service';

describe('SampleSizeServiceService', () => {
  let service: SampleSizeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleSizeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
