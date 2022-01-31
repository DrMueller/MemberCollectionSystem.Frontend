import { createAction, props } from '@ngrx/store';
import { MemberAddress } from '../../models';

export const createMemberAddresss = createAction(
  '[MemberAddress] Create MemberAddresss',
  props<{
    adr: MemberAddress
  }>()
);

export const createMemberAddresssSuccess = createAction(
  '[MemberAddress] Create MemberAddresss Success',
  props<{
    adr: MemberAddress
  }>()
);

export const createMemberAddresssFailure = createAction(
  '[MemberAddress] Create MemberAddresss Failure',
  props<{ error: any }>()
);
