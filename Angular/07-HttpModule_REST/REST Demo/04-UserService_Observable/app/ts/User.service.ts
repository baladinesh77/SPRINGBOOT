
import {Injectable } from '@angular/core';
import {Http, Response,Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';

import {User} from "./User";


@Injectable()
export class UserService{

	//baseUrl:string="https://myangularproject-3768f.firebaseio.com";
	baseUrl:string="http://localhost:53788/api/users";

	constructor(private _http:Http){

	}
	addUser(user:User):Observable<User> {
		let body = JSON.stringify(user);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this._http
			.post(this.baseUrl + "/new", body, options)
			.map((res: Response)=>res.json()) //Returns an observable (Stream of events)
			.catch(error=> {
				let errMsg = (error.message) ? error.message :
					error.status ? `${error.status} - ${error.statusText}` : 'Server error';
				//console.error(errMsg); // log to console instead
				return Observable.throw(errMsg);
			});
	}

	getUser():Observable<User>{
		return this._http
			.get(this.baseUrl )
			.map((res:Response)=>res.json())
			.catch(error=>{
				let errMsg = (error.message) ? error.message :
					error.status ? `${error.status} - ${error.statusText}` : 'Server error';
				console.error(errMsg); // log to console instead
				return Observable.throw(errMsg);
			});

	}


}
