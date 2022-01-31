import * as fromAllMemberAddresses from './all-member-addresses.actions';

describe('loadAllMemberAddressess', () => {
  it('should return an action', () => {
    expect(fromAllMemberAddresses.loadAllMemberAddressess().type).toBe('[AllMemberAddresses] Load AllMemberAddressess');
  });
});
