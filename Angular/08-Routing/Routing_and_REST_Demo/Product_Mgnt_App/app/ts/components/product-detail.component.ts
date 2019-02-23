
import {Product} from "../models/product";
import {OnInit, Component} from "@angular/core";
import {ProductService} from "../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
	selector:'product-detail',
	templateUrl:'app/partials/product-detail.html'
})
export class ProductDetailComponent implements OnInit{
	product:Product;
	id:number;

	constructor(private route:ActivatedRoute, private pService:ProductService)
	{}

	ngOnInit(){
		this.id=this.route.snapshot.params["id"];
		console.log("You selected product with id " + this.id);
		this.pService.getProduct(this.id)
			.subscribe(
				res=>this.product=res,
				ex=>console.log(ex)
			)
	}

}