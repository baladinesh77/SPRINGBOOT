
import {Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class FirebaseService{

	baseUrl:string="https://myangularproject-3768f.firebaseio.com";

	constructor(private _http:Http){

	}
	setUser(firstName:string,lastName:string){
		const body=JSON.stringify({firstName:firstName, lastName:lastName});
 		return this._http
			.put(this.baseUrl +"/user.json",body)
			.map(response=>response.json());
	}

	getUser(){
		return this._http
			.get(this.baseUrl +"/user.json")
			.map(response=>response.json());
	}
}
