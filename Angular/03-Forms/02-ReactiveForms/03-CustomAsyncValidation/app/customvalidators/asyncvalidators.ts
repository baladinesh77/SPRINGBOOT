import {FormControl, AbstractControl} from "@angular/forms";
import {UserService} from "../services/user.service";
import 'rxjs/Rx';

export class AyncValidators{

	public static userExists(ctrl:AbstractControl){
		let userService=new UserService();
		return new Promise( resolve => {
			userService.userExists(ctrl.value)
				.subscribe(
					found => {
						if (found == true) {
							console.log("found")
							resolve({
								'userexists': {
									valid:false
								}
							});
						} else {
							resolve(null);
						}
					},
					err=>resolve(null)
				);
		});
	}
	/*static userExists(control: FormControl):{[key: string]: any} {
		const q = new Promise((resolve, reject) => {
			setTimeout(() => {
				if(control.value === 'sonu') {
					resolve({'abc': true});
				} else {
					resolve(null);
				}
			}, 1000);
		});
		return q;
	}*/
}