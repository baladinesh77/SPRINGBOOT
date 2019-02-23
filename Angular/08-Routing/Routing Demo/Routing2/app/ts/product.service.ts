
import {Product} from "./product";
import {Injectable} from "@angular/core";


@Injectable()
export class ProductService{

	private products:Product[]=[
		{id:101,name:"Orange",price:80, quantity:25},
		{id:102,name:"Apple", price:240, quantity:10},
		{id:103,name:"Grape", price:120, quantity:15}
	];

	getAllProducts():Product[]{
		return this.products;
	}

	getProduct(id:number){
		for(var item of this.products){
			if(item.id==id){
				return item;
			}
		}
		return;
	}

	addProduct(product:Product){
		this.products.push(product);
		console.log(this.products);
	}

}