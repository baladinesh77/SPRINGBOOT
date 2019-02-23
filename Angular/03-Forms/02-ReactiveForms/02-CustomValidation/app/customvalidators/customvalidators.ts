import {FormControl} from "@angular/forms";
/**
 * Created by sonusathyadas on 13-03-2017.
 */

export class CustomValidators {
	public static noSpecialChars(ctrl: FormControl) {
		if (ctrl.value.indexOf(".") == -1 && ctrl.value.indexOf(" ") == -1) {
			return null;
		} else {
			return {
				nospecialchars: {
					valid: false
				}
			};
		}
	}
}
