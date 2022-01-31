import { memberAddressesReducer, initialState } from './member-addresses.reducer';

describe('MemberAddresses Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = memberAddressesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
