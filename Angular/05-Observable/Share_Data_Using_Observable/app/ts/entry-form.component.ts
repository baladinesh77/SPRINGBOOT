
import { Component} from '@angular/core';
import {User} from "./user";
import {UserShareService} from "./user-share.service";

@Component({
	selector:'entry-form',
	templateUrl:'app/partials/entry-form.html'
})
export class EntryFormComponent{
	newUser:User;

	constructor(private _userService:UserShareService)
	{
		this.newUser=new User();
	}

	showUser(){
		this._userService
			.storeUser(this.newUser);
	}
}