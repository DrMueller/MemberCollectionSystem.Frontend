import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { MemberAddress, MemberAddressOverviewEntry } from '../models';
import { MemberAddressesHttpService } from './http';
import { MemberAddressesState, selectOverview } from '../state/member-addresses.reducer';

@Injectable({
  providedIn: 'root'
})
export class MemberAddressesQueryService {
  public constructor(
    private store: Store<MemberAddressesState>) { }

  public get overview$(): Observable<MemberAddressOverviewEntry[]> {
    return this.store.pipe(select(selectOverview));
  }
}
