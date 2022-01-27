import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrCodeRoutingModule } from './qr-code-routing.module';
import { EntryPointComponent } from './entry-point/entry-point.component';
import { OverviewComponent } from './overview/overview.component';


@NgModule({
  declarations: [
    EntryPointComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    QrCodeRoutingModule
  ]
})
export class QrCodeModule { }
