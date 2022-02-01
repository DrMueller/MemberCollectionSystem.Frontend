import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  // #region Constructors (1)

  public constructor(private formBuilder: FormBuilder) { }

  // #endregion Constructors (1)

  // #region Public Methods (1)

  public buildFormGroup(): FormGroup {
    return this.formBuilder.group({
      streetName: [undefined, [Validators.required]],
      houseNumber: [undefined, [Validators.required, Validators.min(1)]]
    });
  }

  // #endregion Public Methods (1)
}
