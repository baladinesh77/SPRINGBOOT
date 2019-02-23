import { Component } from '@angular/core';

import {FirebaseService} from "./firebase.service";
import {User} from "./User";

@Component({
    selector: 'my-app',
    templateUrl:'app/partials/app.html',
    providers:[FirebaseService]

})
export class AppComponent {
	response: string;
	user:User;

	constructor(private _firsbaseService: FirebaseService) {
		this.user=new User();
		//this.user.firstName="a";
		//this.user.lastName="b";
	}

	onSubmit() {
		console.log(this.user);
		this._firsbaseService
			.setUser(this.user)
			.subscribe(
				user=>this.response = JSON.stringify(user),
				error=>console.log(error)
			);
	}

	onGetUser() {
		this._firsbaseService
			.getUser()
			.subscribe(
				user=>this.response=JSON.stringify(user),
				error=>console.log(error)
			);
	}
}


