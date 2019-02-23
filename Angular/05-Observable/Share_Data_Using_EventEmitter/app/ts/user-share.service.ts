
import {Injectable, EventEmitter, Output} from  '@angular/core';
import {User} from "./user";


@Injectable()
export  class UserShareService{

	user:User;

	@Output()
	UserChangeEvent: EventEmitter<User> = new EventEmitter();

	setUser(user:User){
		this.user=user;
		this.UserChangeEvent.emit(this.user);
		//If not need to update automatically in subscriber when actual object changes
		//use a deep copy of object
		//this.user=<User>JSON.parse(JSON.stringify(user));

	}

	//You can return EventEmitter using function also
	getUser():EventEmitter<User>{
		return this.UserChangeEvent;
	}
}