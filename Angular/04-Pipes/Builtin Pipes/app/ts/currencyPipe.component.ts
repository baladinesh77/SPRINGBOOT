import {Component} from "@angular/core";
@Component({
	selector: 'currency-example',
	template: `<div>
    <p>A: {{a | currency:'USD':false}}</p>
    <p>B: {{b | currency:'USD':true:'4.2-2'}}</p>
  </div>`
})
export class CurrencyPipeDemoExample {
	a: number = 0.259;
	b: number = 1.3495;
}