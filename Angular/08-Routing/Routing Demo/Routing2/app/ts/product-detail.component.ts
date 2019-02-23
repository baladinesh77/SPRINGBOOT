
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
		/*
		//Get the route using snapshot
		var id=this.route.snapshot.params.id;
		console.log(id);
		*/
		this.route.params
			.subscribe(params => {
				let id = params['id'];
				this.product = this.pService.getProduct(id);
			});
	}
}