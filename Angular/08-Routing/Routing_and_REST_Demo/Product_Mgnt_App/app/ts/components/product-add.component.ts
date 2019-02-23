

import {Component} from "@angular/core";
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
	selector:'add-product',
	templateUrl:'app/partials/add-product.html'
})
export class ProductAddComponent{

	product:Product;

	constructor(private pService:ProductService, private router:Router){
		this.product=new Product();
	}

	add(){

		this.pService.addProduct(this.product)
			.subscribe(
				res=>{
					console.log("added product is " + JSON.stringify(res));
					this.router.navigate(['/home']);
				},
				ex=>{console.log(ex)}
			)
		this.product=new Product();
	}
}