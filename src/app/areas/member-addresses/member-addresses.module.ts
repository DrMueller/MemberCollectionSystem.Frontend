import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberAddressesRoutingModule } from '.';
import { OverviewComponent } from './overview/overview.component';
import { EntryPointComponent } from './entry-point/entry-point.component';

@NgModule({
  declarations: [
    OverviewComponent,
    EntryPointComponent
  ],
  imports: [
    CommonModule,
    MemberAddressesRoutingModule
  ]
})
export class MemberAddressesModule { }
