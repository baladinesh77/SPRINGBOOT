

import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";


@Component({
	selector:'product-rating',
	template:`<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<h2>Product rating page</h2>
				<p>You selected product with id :{{id}}</p>
			</div>
			</div>`
})
export class ProductRatingComponent{
	id:number;

	constructor(private route:ActivatedRoute){
		this.route.snapshot.params["id"];
		this.route.params
			.subscribe(params=>{
				this.id=params["id"];
			});
	}

}