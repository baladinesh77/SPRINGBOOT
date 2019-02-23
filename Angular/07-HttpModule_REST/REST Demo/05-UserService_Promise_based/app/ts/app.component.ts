import { Component } from '@angular/core';

import {UserService} from "./User.service";
import {User} from "./User";


@Component({
    selector: 'my-app',
    templateUrl:'app/partials/app.html'

})
export class AppComponent {
	response: string;
	user:User;
	errorMessage:any;

	constructor(private _userService: UserService) {
		this.user=new User();

	}

	onSubmit() {
		console.log(this.user);
		this._userService
			.addUser(this.user)
			.then(
				user=>this.response = JSON.stringify(user),
				error =>  this.errorMessage = <any>error
			);
	}

	onGetUser() {
		this._userService
			.getUser()
			.then(
				user=>this.response=JSON.stringify(user),
				error =>  this.errorMessage = <any>error
			);
	}
}


