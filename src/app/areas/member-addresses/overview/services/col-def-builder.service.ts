import { Injectable, TemplateRef } from '@angular/core';
import { ColumnDefinitionsContainer } from 'src/app/shared/tables/models';
import { ColDefBuilderFactoryService } from 'src/app/shared/tables/services';
import { MemberAddressesModule, MemberAddressesServicesModule } from '../..';
import { MemberAddressOverviewEntryVm } from '../../common/models';

@Injectable({
  providedIn: 'root'
})
export class ColDefBuilderService {
  public constructor(
    private builderFactory: ColDefBuilderFactoryService) { }

  public buildDefinition(actionsTemplate: TemplateRef<any>,): ColumnDefinitionsContainer {
    return this.builderFactory
      .startBuilding<MemberAddressOverviewEntryVm>()
      .withColumn('id', 'ID', 'id-cell').bindingTo('id')
      .withColumn('street', 'Street').bindingTo('street')
        .withColumn('actions', '', 'button-cell').withTemplate(actionsTemplate)
        .build();
  }
}
