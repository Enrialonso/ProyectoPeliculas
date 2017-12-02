import { TestBed, inject } from '@angular/core/testing';

import { GetserverService } from './getserver.service';

describe('GetserverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetserverService]
    });
  });

  it('should be created', inject([GetserverService], (service: GetserverService) => {
    expect(service).toBeTruthy();
  }));
});
