import * as fromMemberAddress from './member-address.actions';

describe('createMemberAddresss', () => {
  it('should return an action', () => {
    expect(fromMemberAddress.createMemberAddresss().type).toBe('[MemberAddress] Create MemberAddresss');
  });
});
