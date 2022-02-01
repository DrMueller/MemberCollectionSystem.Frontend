import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MemberAddressesRoutingService {

  constructor(private readonly router: Router) { }

  public toOverview(): void {
    this.navigateTo('overview');
  }

  public toEdit(id: number): void {
    this.navigateTo(id.toString());
  }

  private navigateTo(...urlParts: any[]): void {
    this.router.navigate(['member-addresses', ...urlParts]);
  }
}
