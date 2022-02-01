import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { RxFormGroupBindingService } from 'src/app/shared/rx-forms/services';
import { MemberAddress } from '../../common/models';
import { MemberAddressesRoutingService } from '../../common/services/member-addresses-routing.service';
import { MemberAddressesState, selectCurrentAddress } from '../../common/state';
import { upsertMemberAddress } from '../../common/state/actions';
import { FormBuilderService } from '../services/form-builder.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  private _memberAddress: MemberAddress | null = null;
  public formGroup!: FormGroup;
  private _subscriptions!: Subscription[];

  public get saveDescription(): string {
    if (this._memberAddress) {
      return `Edit address - ${this._memberAddress.id}`;
    }

    return 'New address';
  }

  public get canSave(): boolean {
    return this.formGroup.valid;
  }

  public ngOnDestroy(): void {
    this._subscriptions.forEach(subs => subs.unsubscribe());
  }

  constructor(
    private readonly router: MemberAddressesRoutingService,
    private formBinder: RxFormGroupBindingService,
    private readonly formBuilder: FormBuilderService,
    private store: Store<MemberAddressesState>,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.buildFormGroup();

    this._subscriptions = [
      this.store
        .pipe(select(selectCurrentAddress))
        .subscribe(adr => {
          if (adr) {
            this._memberAddress = adr;
            this.formBinder.bindToFormGroup(adr, this.formGroup);
          }
        })
    ];
  }

  public save(): void {
    const adr = this._memberAddress ?? <MemberAddress>{};
    const newAdr = { ...adr, ...this.formGroup.value };

    this.store.dispatch(upsertMemberAddress({
      adr: newAdr
    }));

    this.router.toOverview();
  }

  public cancel(): void {
    this.router.toOverview();
  }
}
