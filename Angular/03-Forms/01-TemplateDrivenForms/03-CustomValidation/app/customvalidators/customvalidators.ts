import {ValidatorFn, AbstractControl, Validator, FormControl, NG_VALIDATORS} from "@angular/forms";
import {Directive} from "@angular/core";

//selector: '[noSpecialChars][ngModel]',
//{ provide: NG_VALIDATORS, useExisting: NoSpecialCharacterValidator, multi: true }
//Provider name is NG_VALIDATORS, and we need to use a class for the provider that
//is mentioned in useExisting, and NG_VALIDATORS can have multiple providers
//so we need to specify multi:true (ie other validators can also be used)
@Directive({
	selector: '[noSpecialChars]',
	providers: [
		{ provide: NG_VALIDATORS, useExisting: NoSpecialCharacterValidator, multi: true }
	]
})
export class NoSpecialCharacterValidator implements Validator {
	validator: ValidatorFn;

	constructor() {
		this.validator = this.specialCharactersValidationFactory();
	}

	validate(c: FormControl) {
		return this.validator(c);
	}

	private specialCharactersValidationFactory(): ValidatorFn {
		return (ctrl: AbstractControl) => {
			if (ctrl.valid == undefined) {
				return null;
			}
			if (ctrl.value == undefined || (ctrl.value.indexOf(".") == -1 && ctrl.value.indexOf(" ") == -1)) {
				return null;
			} else {
				return {
					nospecialchars: {
						valid: false
					}
				}
			}
		}
	}
}