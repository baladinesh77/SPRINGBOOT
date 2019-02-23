
import { Component,OnInit} from '@angular/core';
import {User} from "./user";
import {UserShareService} from "./user-share.service";

@Component({
	selector:'list-item',
	templateUrl:'app/partials/list-items.html'
})
export class ListItemComponent implements OnInit{

	user:User;
	subscription: any;

	constructor(private _userService:UserShareService) {
		this.user=new User();
	}

	ngOnInit() {
			/*this._userService
			.UserChangeEvent
			.subscribe(user => {
				this.user=user;
			});*/

			this._userService
				.getUser()
				.subscribe(user=>{ this.user=user;});
	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}