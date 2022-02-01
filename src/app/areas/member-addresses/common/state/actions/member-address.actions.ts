import { createAction, props } from '@ngrx/store';
import { MemberAddress } from '../../models';

export const updateMemberAddresss = createAction(
  '[MemberAddress] Update MemberAddresss'
);

export const updateMemberAddresssSuccess = createAction(
  '[MemberAddress] Update MemberAddresss Success',
  props<{ data: any }>()
);

export const updateMemberAddresssFailure = createAction(
  '[MemberAddress] Update MemberAddresss Failure',
  props<{ error: any }>()
);

export const loadAllMemberAddressess = createAction(
  '[MemberAddress] Load AllMemberAddressess'
);

export const loadMemberAddress = createAction(
  '[MemberAddress] Load MemberAddress',
  props<{
    id: number
  }>()
);

export const loadMemberAddressSuccess = createAction(
  '[MemberAddress] Load MemberAddress Success',
  props<{
    address: MemberAddress
  }>()
);

export const loadAllMemberAddressessSuccess = createAction(
  '[MemberAddress] Load AllMemberAddressess Success',
  props<{
    addresses: MemberAddress[]
  }>()
);

export const loadAllMemberAddressessFailure = createAction(
  '[MemberAddress] Load AllMemberAddressess Failure',
  props<{ error: any }>()
);

export const upsertMemberAddress = createAction(
  '[MemberAddress] Upsert MemberAddresss',
  props<{
    adr: MemberAddress
  }>()
);

export const upsertMemberAddressSuccess = createAction(
  '[MemberAddress] Upsert MemberAddresss Success',
  props<{
    adr: MemberAddress
  }>()
);

export const upsertMemberAddressFaile = createAction(
  '[MemberAddress] Upsert MemberAddresss Failure',
  props<{ error: any }>()
);

export const setCurrentMemberAddressId = createAction(
  '[MemberAddress] Set current MemberAddress',
  props<{
    id: number | undefined
  }>()
);
