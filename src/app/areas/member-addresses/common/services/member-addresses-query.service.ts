import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MemberAddressOverviewEntryVm } from '../models';
import { MemberAddressesState } from '../state/member-addresses.reducer';
import { selectOverview } from '../state';

@Injectable({
  providedIn: 'root'
})
export class MemberAddressesQueryService {
  public constructor(
    private store: Store<MemberAddressesState>) { }

  public get overview$(): Observable<MemberAddressOverviewEntryVm[]> {
    return this.store.pipe(select(selectOverview));
  }
}
