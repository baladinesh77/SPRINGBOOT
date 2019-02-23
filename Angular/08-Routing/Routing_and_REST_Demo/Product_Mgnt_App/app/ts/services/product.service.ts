
import {Injectable, Inject} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'

import {Product} from "../models/product";
import {API_ENDPOINT} from "../models/app.settings";


@Injectable()
export class ProductService {

	//apiEndpoint:string;

	//Use this constructor if API_ENDPOINT is injected from module
	constructor(private http: Http,@Inject('API_ENDPOINT') private apiEndpoint: string) {
	}

	//use this constructor if API_ENDPOINT is declared as exportable constant
	/*constructor(private http: Http) {
		this.apiEndpoint=API_ENDPOINT;
	}*/

	getProducts():Observable<Product[]>{

		return this.http
			.get(this.apiEndpoint)
			.map((resp:Response)=>resp.json());
	}

	addProduct(product:Product):Observable<Product>{
		let body = JSON.stringify(product);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http
			.post(`${this.apiEndpoint}/add`, body, options)
			.map((res: Response)=>res.json()) //Returns an observable (Stream of events)
			.catch(error=> {
				return Observable.throw("Server error");
			});
	}

	getProduct(id:number):Observable<Product>{
		return this.http
			.get(`${this.apiEndpoint}/${id}`)
			.map((res:Response)=>res.json())
			.catch(error=>{
				return Observable.throw("Server Error");
			});
	}
}