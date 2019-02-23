import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";

@Component({
    	selector: 'my-app',
    	templateUrl:'app/partials/app.html',
	//providers:[DataService] //Injected in app.module.ts
})
export class AppComponent implements OnInit{

	names:string[];

	constructor(private _dataService:DataService){

	}

	ngOnInit(){
		this.names=this._dataService.getNames();
	}
}


