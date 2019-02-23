import { Component } from '@angular/core';
import {AsyncPipeDemoComponent} from "./asyncPipe.component";
import {NumberPipeDemoComponent} from "./decimalPipe.component";
import {CurrencyPipeDemoExample} from "./currencyPipe.component";
import {PercentPipeDemoExample} from "./percentPipe.component";
import {CustomPipeComponent} from './custompipe.component'
@Component({
	selector: 'app',
    	templateUrl: 'app/partials/app.html',
	directives:[
		AsyncPipeDemoComponent,
		NumberPipeDemoComponent,
		CurrencyPipeDemoExample,
		PercentPipeDemoExample,
		CustomPipeComponent
	]
})
export class AppComponent {
    	caption:string;
	pageContent:string;

	constructor(){
		this.caption="Welcome to my application";
		this.pageContent="This is page content"
	}
}


