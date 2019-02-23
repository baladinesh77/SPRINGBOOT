
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {ProductService} from "./product.service";
import {Product} from "./product";

@Component({
	selector:'product-detail',
	templateUrl:'app/partials/product-detail.html'
})
export class ProductDetailComponent implements OnInit{

	product:Product;

	constructor(private route: ActivatedRoute, private pService:ProductService){

	}
	ngOnInit(){
		this.route.params.subscribe(params => {
			let id = params['id'];
			this.product=this.pService.getProduct(id);
		});
	}
}