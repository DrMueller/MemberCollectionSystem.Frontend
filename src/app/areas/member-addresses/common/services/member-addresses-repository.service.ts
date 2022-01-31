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
export class MemberAddressesRepositoryService {
  public constructor(
    private httpService: MemberAddressesHttpService) { }

  public loadAll$(): Observable<MemberAddress[]> {
    return this.httpService.get$<MemberAddress[]>('');
  }

  public create$(entry: MemberAddress): Observable<MemberAddress> {
    return this.httpService.post$<MemberAddress>('', entry);
  }
}
