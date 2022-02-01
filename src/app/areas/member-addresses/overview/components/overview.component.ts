import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ColumnDefinitionsContainer } from 'src/app/shared/tables/models';
import { MemberAddressOverviewEntryVm } from '../../common/models';
import { MemberAddressesQueryService } from '../../common/services/member-addresses-query.service';
import { MemberAddressesRoutingService } from '../../common/services/member-addresses-routing.service';
import { MemberAddressesState } from '../../common/state';
import { loadAllMemberAddressess } from '../../common/state/actions';
import { ColDefBuilderService } from '../services';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  providers: [
    ColDefBuilderService
  ]
})
export class OverviewComponent implements OnInit, OnDestroy {
  public columnDefinitions!: ColumnDefinitionsContainer;
  @ViewChild('actions', { static: true }) public actionsTemplate!: TemplateRef<any>;
  @ViewChild('deleteTemplate', { static: true }) public deleteTemplate!: TemplateRef<any>;
  @ViewChild('editTemplate', { static: true }) public editTemplate!: TemplateRef<any>;
  public overviewEntries: MemberAddressOverviewEntryVm[] = [];

  constructor(
    private readonly colDefBuilder: ColDefBuilderService,
    private readonly router: MemberAddressesRoutingService,
    private readonly queryService: MemberAddressesQueryService,
    private store: Store<MemberAddressesState>) { }
  ngOnDestroy(): void {
    this._overviewSubscription?.unsubscribe();
  }

  private _overviewSubscription: Subscription | null = null;

  ngOnInit(): void {
    this._overviewSubscription = this.queryService.overview$.subscribe(entries => this.overviewEntries = entries);
    this.columnDefinitions = this.colDefBuilder.buildDefinition(this.actionsTemplate);
    this.store.dispatch(loadAllMemberAddressess());
  }

  public edit(memberAddressId: string): void {
    const id = parseInt(memberAddressId, 10);
    this.router.toEdit(id);
  }

  public createMemberAddress(): void {
    this.router.toEdit(-1);
  }
}
