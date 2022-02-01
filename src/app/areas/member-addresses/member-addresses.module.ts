import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberAddressesRoutingModule, MemberAddressesServicesModule } from '.';
import { EntryPointComponent } from './entry-point/entry-point.component';
import { TablesModule } from 'src/app/shared/tables';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MemberAddressesEffectsService, memberAddressesFeatureKey, memberAddressesReducer } from './common/state';
import { OverviewComponent } from './overview/components/overview.component';
import { RxFormsModule } from 'src/app/shared/rx-forms';
import { EditComponent } from './edit/components';

@NgModule({
  declarations: [
    OverviewComponent,
    EntryPointComponent,
    EditComponent
  ],
  imports: [
    TablesModule,
    RxFormsModule,
    CommonModule,
    MemberAddressesServicesModule,
    MemberAddressesRoutingModule,
    StoreModule.forFeature(memberAddressesFeatureKey, memberAddressesReducer),
    EffectsModule.forFeature([MemberAddressesEffectsService]),
  ]
})
export class MemberAddressesModule { }
