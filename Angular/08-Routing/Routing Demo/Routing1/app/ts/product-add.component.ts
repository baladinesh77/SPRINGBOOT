
import {Component} from "@angular/core";
import {Product} from "./product";
import {ProductService} from './product.service'

@Component({
	selector:'add-product',
	templateUrl:'app/partials/add-product.html'
})
export class ProductAddComponent{

	product:Product;

	constructor(private pService:ProductService){
		this.product=new Product();
	}

	add(){

		this.pService.addProduct(this.product);
		this.product=new Product();
	}
}