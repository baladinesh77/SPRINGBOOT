
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";


@Component({
	selector:'product-info',
	templateUrl:'app/partials/product-info.html'
})
export class ProductInfoComponent implements  OnInit{

	id:number;
	name:string;

	constructor(private route:ActivatedRoute)
	{}

	ngOnInit(){
		this.route.params
			.subscribe(params=>{
				this.id=params["id"];
				this.name=params["name"];
			})
	}
}