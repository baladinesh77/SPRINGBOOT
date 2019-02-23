import { Component } from '@angular/core';

import {FirebaseService} from "./firebase.service";

@Component({
    selector: 'my-app',
    templateUrl:'app/partials/app.html',
    providers:[FirebaseService]

})
export class AppComponent {
	response: string;

	constructor(private _firsbaseService: FirebaseService) {

	}

	onSubmit(firstName:string, lastName:string) {
		this._firsbaseService
			.setUser(firstName,lastName)
			.subscribe(
				user=>this.response = JSON.stringify(user),
				error=>console.log(error)
			);
	}

	onGetUser() {
		this._firsbaseService
			.getUser()
			.subscribe(
				users=>this.response=JSON.stringify(users),
				error=>console.log(error)
			);
	}
}


