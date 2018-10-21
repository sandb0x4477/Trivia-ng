import { TestBed, inject } from '@angular/core/testing';

import { OpentdbService } from './opentdb.service';

describe('OpentdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpentdbService]
    });
  });

  it('should be created', inject([OpentdbService], (service: OpentdbService) => {
    expect(service).toBeTruthy();
  }));
});
