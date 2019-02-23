
import {Injectable} from "@angular/core";
import {Employee} from "../models/employee";
import {Observable} from "rxjs/Observable";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class EmployeeService{

	constructor(private http:Http){}

	public AddEmployee(employee:Employee):Observable<any>{
		let body=JSON.stringify(employee);
		let headers=new Headers({"Content-Type":"application/json"});
		let options=new RequestOptions({headers:headers});
		return this.http.post("http://localhost:8060/api/employees", body, options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(resp:Response){
		return resp.json();
	}
	private handleError(err:any){
		console.log("Error in adding employee",err.statusText);
		return Observable.throw(err.statusText);
	}
}