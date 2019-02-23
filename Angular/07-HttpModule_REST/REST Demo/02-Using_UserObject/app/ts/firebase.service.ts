
import {Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { Observable }     from 'rxjs/Observable';
import {User} from "./User";
import 'rxjs/Rx';

@Injectable()
export class FirebaseService{

	baseUrl:string="https://myangularproject-3768f.firebaseio.com";

	constructor(private _http:Http){

	}
	setUser(user:User){
		const body=JSON.stringify(user);
 		return this._http
			.put(this.baseUrl +"/user.json",body)
			.map(response=>response.json()); //Returns an observable (Stream of events)
	}

	getUser(){
		return this._http
			.get(this.baseUrl +"/user.json")
			.map(response=>response.json());
	}
}
