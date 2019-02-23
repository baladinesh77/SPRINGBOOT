
import {Injectable} from  '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import {User} from "./user";
import{Observer} from 'rxjs/Observer';

@Injectable()
export  class UserShareService{
	private _user:User;
	private userObservable: Observable<User>;
	private _observer: Observer<User>;

	constructor() {
		this.userObservable = new Observable(observer =>this._observer = observer)
			.share();
		// share() allows multiple subscribers
	}
	storeUser(user:User) {
		this._user = user;
		this._observer.next(this._user);
		//If you dont want the subscriber to be updated automatically when the object changes then 
		//use a deep copy of object
		//this._user=<User>JSON.parse(JSON.stringify(user));//Create a deep copy;
	}

	getUser():Observable<User>{
		return this.userObservable;
	}
}