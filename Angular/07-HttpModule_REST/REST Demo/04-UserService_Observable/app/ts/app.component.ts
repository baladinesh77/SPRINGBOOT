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

	constructor(private _userService: UserService) {
		this.user=new User();
		//this.user.firstName="a";
		//this.user.lastName="b";
	}

	onSubmit() {
		console.log(this.user);
		this._userService
			.addUser(this.user)
			.subscribe(
				user=>this.response = JSON.stringify(user),
				error=>console.log(error)
			);
	}

	onGetUser() {
		this._userService
			.getUser()
			.subscribe(
				user=>this.response=JSON.stringify(user),
				error=>console.log(error)
			);
	}
}


