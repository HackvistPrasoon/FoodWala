import { TestBed } from '@angular/core/testing';

import { FoodapiService } from './foodapi.service';

describe('FoodapiService', () => {
  let service: FoodapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
