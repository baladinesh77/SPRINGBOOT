import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector:'product-info',
	template:`<h1>This is info page</h1>
			<p>Id={{id}}</p>
			<p>Name={{name}}</p>`
})
export  class ProductInfoComponent implements OnInit{

	public id:number;
	public name:string;

	constructor(private route:ActivatedRoute){
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
				this.id = params['id'];
				this.name=params['name'];
			});
	}

}