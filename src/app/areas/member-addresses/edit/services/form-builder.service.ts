import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  public constructor(private formBuilder: FormBuilder) { }

  public buildFormGroup(): FormGroup {
    return this.formBuilder.group({
      streetName: [undefined, [Validators.required]],
      houseNumber: [undefined, [Validators.required, Validators.min(1)]]
    });
  }
}
