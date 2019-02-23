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

	onGetUsers() {
		this._userService
			.getUsers()
			.then(
				users=>this.response=JSON.stringify(users),
				error =>  this.errorMessage = <any>error
			);
	}

	onSearch(){
		this._userService
			.getUsersByName(this.user.firstName, this.user.lastName)
			.then(
				users=>this.response=JSON.stringify(users),
				error =>  this.errorMessage = <any>error
			);
	}
}


