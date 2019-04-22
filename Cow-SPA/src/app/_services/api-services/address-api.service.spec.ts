/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddressApiService } from './address-api.service';

describe('Service: AddressApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressApiService]
    });
  });

  it('should ...', inject([AddressApiService], (service: AddressApiService) => {
    expect(service).toBeTruthy();
  }));
});
