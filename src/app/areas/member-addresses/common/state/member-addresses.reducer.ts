import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { MemberAddress } from '../models';
import { upsertMemberAddressSuccess, loadAllMemberAddressessSuccess, loadMemberAddressSuccess, setCurrentMemberAddressId } from './actions/member-address.actions';

export interface MemberAddressesState {
  addresses: EntityState<MemberAddress>,
  currentAddressId: number | undefined
}

export const adapter: EntityAdapter<MemberAddress> =
  createEntityAdapter<MemberAddress>({
    selectId: f => f.id,
    sortComparer: f => f.id
  })

export const initialState: MemberAddressesState = {
  addresses: adapter.getInitialState(),
  currentAddressId: undefined
}

export const memberAddressesReducer = createReducer(
  initialState,
  on(
    loadAllMemberAddressessSuccess,
    (state, action) => {
      return {
        ...state,
        addresses: adapter.upsertMany(action.addresses, state.addresses)
      };
    }),
  on(
    upsertMemberAddressSuccess,
    (state, action) => {
      return {
        ...state,
        addresses: adapter.addOne(action.adr, state.addresses)
      }
    }),
  on(
    setCurrentMemberAddressId,
    (state, action) => {
      return {
        ...state,
        currentAddressId: action.id
      }
    }),
  on(
    loadMemberAddressSuccess,
    (state, action) => {
      return {
        ...state,
        addresses: adapter.upsertOne(action.address, state.addresses)
      }
    })
);
