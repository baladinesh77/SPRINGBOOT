
import {Injectable, ReflectiveInjector} from "@angular/core";
import {
	Http,
	BrowserXhr,
	RequestOptions,
	BaseRequestOptions,
	ResponseOptions,
	ConnectionBackend,
	BaseResponseOptions,
	XHRBackend,
	CookieXSRFStrategy,
	XSRFStrategy
} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService{
	private http:Http;
	constructor(){
		let injector = ReflectiveInjector.resolveAndCreate([
			Http,
			BrowserXhr,
			{provide: RequestOptions, useClass: BaseRequestOptions},
			{provide: ResponseOptions, useClass: BaseResponseOptions},
			{provide: ConnectionBackend, useClass: XHRBackend},
			{provide: XSRFStrategy, useFactory: () => new CookieXSRFStrategy()},
		]);
		this.http = injector.get(Http);
	}

	public userExists(username:string):Observable<any>{
		return this.http.get("http://localhost:8060/api/users")
			.map(resp=>{
				for(let uname of resp.json() ){
					if(uname===username) {
						return true;
					}
				}
				return false;
			})
			.catch(err=>Observable.throw(err.statusText));
	}
}