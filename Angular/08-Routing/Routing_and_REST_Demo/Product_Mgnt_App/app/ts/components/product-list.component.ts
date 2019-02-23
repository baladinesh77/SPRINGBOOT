
import{Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
	selector:'product-list',
	templateUrl: 'app/partials/product-list.html'
})
export class ProductListComponent implements OnInit{

	products:Product[];

	constructor(private pService:ProductService, private router:Router){
	}

	ngOnInit(){
		this.pService
			.getProducts()
			.subscribe(
				resp=>{this.products=resp;},
				error=>console.log(error)
			);
	}

	navigate(id:number){
		console.log(id);
		//this.router.navigate(['/rating']);
		this.router.navigate(['/rating', id]);
	}
}