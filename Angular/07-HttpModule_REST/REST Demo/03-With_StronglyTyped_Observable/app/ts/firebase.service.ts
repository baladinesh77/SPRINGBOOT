
import {Injectable } from '@angular/core';
import {Http, Response } from "@angular/http";
import { Observable }     from 'rxjs/Observable';
import {User} from "./User";
import 'rxjs/Rx';

@Injectable()
export class FirebaseService{

	baseUrl:string="https://myangularproject-3768f.firebaseio.com";

	constructor(private _http:Http){

	}
	setUser(user:User):Observable<User>{
		const body=JSON.stringify(user);
 		return this._http
			.put(this.baseUrl +"/user.json",body)
			.map((res:Response)=>res.json()) //Returns an observable (Stream of events)
			.catch(error=> {
				let errMsg = (error.message) ? error.message :
					error.status ? `${error.status} - ${error.statusText}` : 'Server error';
				console.error(errMsg); // log to console instead
				return Observable.throw(errMsg);
			});
	}

	getUser():Observable<User>{
		return this._http
			.get(this.baseUrl +"/user.json")
			.map((res:Response)=>res.json())
			.catch(error=>{
				let errMsg = (error.message) ? error.message :
					error.status ? `${error.status} - ${error.statusText}` : 'Server error';
				console.error(errMsg); // log to console instead
				return Observable.throw(errMsg);
			});

	}


}
