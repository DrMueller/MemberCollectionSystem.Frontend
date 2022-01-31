import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RxFormGroupBindingService } from 'src/app/shared/rx-forms/services';
import { MemberAddress } from '../../common/models';
import { MemberAddressesRoutingService } from '../../common/services/member-addresses-routing.service';
import { MemberAddressesState } from '../../common/state';
import { createMemberAddresss } from '../../common/state/actions';
import { FormBuilderService } from '../services/form-builder.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [FormBuilderService]
})
export class CreateComponent implements OnInit {
  public formGroup!: FormGroup;

  public get canSave(): boolean {
    return this.formGroup.valid;
  }

  constructor(
    private readonly router: MemberAddressesRoutingService,
    private formBinder: RxFormGroupBindingService,
    private readonly formBuilder: FormBuilderService,
    private store: Store<MemberAddressesState>,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.buildFormGroup();
  }

  public save(): void {
    const adr = <MemberAddress>{};
    this.formBinder.bindToModel(this.formGroup, adr);
    this.store.dispatch(createMemberAddresss({
      adr: adr
    }));

    this.router.toOverview();
  }

  public cancel(): void {
    this.router.toOverview();
  }
}
