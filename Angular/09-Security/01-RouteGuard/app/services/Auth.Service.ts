
import {Injectable, Output, EventEmitter} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {User} from "../models/user.model";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Identity} from "../models/identity.model";

@Injectable()
export class AuthService{

	@Output()
	loginChangeEvent: EventEmitter<Identity> = new EventEmitter();
	private identity:Identity;

	constructor(private http:Http){}

	public login(user:User):Observable<any>{
		var body=JSON.stringify({
			username:user.username,
			password:user.password
		});
		var headers=new Headers({"Content-Type":"application/json"});
		var options=new RequestOptions({headers:headers});
		return this.http.post("http://localhost:8060/api/users/validate", body, options)
			.map((resp:Response)=>resp.json())
			.catch((err)=>Observable.throw(err.statusText));
	}

	public logoff(){
		localStorage.clear();
		this.identity=new Identity(undefined,false);
		this.loginChangeEvent.emit(this.identity);
	}

	public setAuthenticationInfo(username:string){
		localStorage.setItem("username", username);
		this.identity=new Identity(username,true);
		this.loginChangeEvent.emit(this.identity);
	}

	public isAuthenticted():boolean{
		if(localStorage.getItem("username")) {
			return true;
		}else{
			return false;
		}
	}

	public loadUserInfo(){
		if(localStorage.getItem("username")) {
			var username=localStorage.getItem("username");
			this.identity=new Identity(username,true);
			this.loginChangeEvent.emit(this.identity);
		}else{
			this.identity=new Identity(undefined,false);
			this.loginChangeEvent.emit(this.identity);
		}
	}
}