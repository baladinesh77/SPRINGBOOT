import { Component } from '@angular/core';
import {Demo1Component} from "./demo1.component";

@Component({
	selector: 'app',
    	templateUrl: 'app/partials/app.html',
	directives:[Demo1Component]
})
export class AppComponent {
    	caption:string;
	pageContent:string;

	constructor(){
		this.caption="Welcome to my application";
		this.pageContent="This is page content"
	}
}


