import { TestBed } from '@angular/core/testing';

import { MemberAddressesRoutingService } from './member-addresses-routing.service';

describe('MemberAddressesRoutingService', () => {
  let service: MemberAddressesRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberAddressesRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
