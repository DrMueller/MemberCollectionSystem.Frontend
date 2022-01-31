import { createAction, props } from '@ngrx/store';
import { MemberAddress } from '../../models';

export const loadAllMemberAddressess = createAction(
  '[AllMemberAddresses] Load AllMemberAddressess'
);

export const loadAllMemberAddressessSuccess = createAction(
  '[AllMemberAddresses] Load AllMemberAddressess Success',
  props<{
    addresses: MemberAddress[]
  }>()
);

export const loadAllMemberAddressessFailure = createAction(
  '[AllMemberAddresses] Load AllMemberAddressess Failure',
  props<{ error: any }>()
);
