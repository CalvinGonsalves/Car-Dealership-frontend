import { Validators, AbstractControl, ValidationErrors, NG_VALIDATORS, ValidatorFn } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { Subscription } from 'rxjs';


export function compareValidator(controlNametoCompare: string): ValidatorFn {

  return (c: AbstractControl): ValidationErrors | null => {
    if (c.value === null || c.value.length === 0) {
      return null;
    }


    const controltoCompare = c.root.get(controlNametoCompare);

    if (controltoCompare) {
      const subscription: Subscription = controltoCompare.valueChanges.subscribe(() => {
        c.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }
    return controltoCompare && controltoCompare.value !== c.value ? { 'compare': true } : null;

  };

}

@Directive({
  selector: '[compare]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CompareValidatorDirective, multi: true }]
})
export class CompareValidatorDirective implements Validators {
  @Input('compare') controlNametoCompare: string;


  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value === null || c.value.length === 0) {
      return null;
    }


    const controltoCompare = c.root.get(this.controlNametoCompare);

    if (controltoCompare) {
      const subscription: Subscription = controltoCompare.valueChanges.subscribe(() => {
        c.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }
    return controltoCompare && controltoCompare.value !== c.value ? { 'compare': true } : null;
  }
}
