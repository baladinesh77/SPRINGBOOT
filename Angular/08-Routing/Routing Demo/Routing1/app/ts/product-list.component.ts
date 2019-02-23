import {Product} from "./product";
import {Component, OnInit} from "@angular/core";
import {ProductService} from "./product.service";


@Component({
	selector:'product-list',
	templateUrl:'app/partials/productlist.html'
})
export class ProductListComponent implements OnInit{

	products:Product[];
	private pService;

	constructor(ps:ProductService)
	{
		this.pService=ps;
	}

	ngOnInit(){
		this.products=this.pService.getAllProducts();
	}
}