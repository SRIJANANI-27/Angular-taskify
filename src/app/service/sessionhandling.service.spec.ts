import { TestBed } from '@angular/core/testing';

import { SessionhandlingService } from './sessionhandling.service';

describe('SessionhandlingService', () => {
  let service: SessionhandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionhandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
