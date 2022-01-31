import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MemberAddressesRoutingService {

  constructor(private readonly router: Router) { }

  public toOverview(): void{
    this.navigateTo('overview');
  }

  public toCreate(): void {
    this.navigateTo('create');
  }

  private navigateTo(...urlParts: any[]): void {
    this.router.navigate(['member-addresses', ...urlParts]);
  }
}
