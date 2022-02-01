import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberAddress } from '../models';
import { MemberAddressesHttpService } from './http';

@Injectable({
  providedIn: 'root'
})
export class MemberAddressesRepositoryService {
  public constructor(
    private httpService: MemberAddressesHttpService) { }

  public loadAll$(): Observable<MemberAddress[]> {
    return this.httpService.get$<MemberAddress[]>('');
  }

  public load$(id: number): Observable<MemberAddress> {
    return this.httpService.get$<MemberAddress>(id);
  }

  public upsert$(entry: MemberAddress): Observable<MemberAddress> {
    return this.httpService.put$<MemberAddress>('', entry);
  }
}
