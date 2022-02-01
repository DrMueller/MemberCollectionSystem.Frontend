import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { MemberAddressesState } from '.';
import { MemberAddress, MemberAddressOverviewEntryVm } from '../models';

export const memberAddressesFeatureKey = 'memberAddresses';

const getFeatureState = createFeatureSelector<MemberAddressesState>(memberAddressesFeatureKey);

export const selectOverview = createSelector(
  getFeatureState,
  state => Object.values(state.addresses.entities)
    .map(e => <MemberAddressOverviewEntryVm>{
      id: e?.id,
      street: `${e!.streetName} ${e!.houseNumber}`
    })
);

export const selectCurrentAddressId = createSelector(
  getFeatureState,
  state => state.currentAddressId
);

export const selectCurrentAddress = createSelector(
  getFeatureState,
  selectCurrentAddressId,
  (state, id) => {
    if (!id) {
      return null;
    } else {
      return state.addresses.entities[id];
    }
  }
);
