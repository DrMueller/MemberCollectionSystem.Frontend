import { createEntityAdapter, EntityAdapter, EntityState, Dictionary } from '@ngrx/entity';
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { MemberAddress, MemberAddressOverviewEntry } from '../models';
import { createMemberAddresssSuccess, loadAllMemberAddressessSuccess } from './actions';

export const memberAddressesFeatureKey = 'memberAddresses';

const getFeatureState = createFeatureSelector<MemberAddressesState>(memberAddressesFeatureKey);

export const selectOverview = createSelector(
  getFeatureState,
  state => Object.values(state.addresses.entities)
    .map(e => new MemberAddressOverviewEntry(e!.id, `${e!.streetName} ${e!.houseNumber}`))
);

export interface MemberAddressesState {
  addresses: EntityState<MemberAddress>
}

export const adapter: EntityAdapter<MemberAddress> =
  createEntityAdapter<MemberAddress>({
    selectId: f => f.id,
    sortComparer: f => f.id
  })

export const initialState: MemberAddressesState = {
  addresses: adapter.getInitialState()
};

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
    createMemberAddresssSuccess,
    (state, action) => {
      return {
        ...state,
        addresses: adapter.addOne(action.adr, state.addresses)
      }
    })
);
