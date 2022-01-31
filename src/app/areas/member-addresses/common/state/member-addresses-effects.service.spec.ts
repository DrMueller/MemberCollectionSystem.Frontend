import { TestBed } from '@angular/core/testing';

import { MemberAddressesEffectsService } from './member-addresses-effects.service';

describe('MemberAddressesEffectsService', () => {
  let service: MemberAddressesEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberAddressesEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
