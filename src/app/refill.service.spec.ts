import { TestBed, inject } from '@angular/core/testing';

import { RefillService } from './refill.service';

describe('RefillService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefillService]
    });
  });

  it('should be created', inject([RefillService], (service: RefillService) => {
    expect(service).toBeTruthy();
  }));
});
