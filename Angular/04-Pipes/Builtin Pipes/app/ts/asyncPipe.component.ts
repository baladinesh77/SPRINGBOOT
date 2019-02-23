import {Component} from "@angular/core";

@Component({
	selector: 'async-example',
	template: `<div>
    				<p>Wait for it... {{ greeting | async }}</p>
    				<button (click)="clicked()">{{ arrived ? 'Reset' : 'Resolve' }}</button>
  			</div>`
})
export class AsyncPipeDemoComponent {
	greeting: Promise<string> = null;
	arrived: boolean = false;
	private resolve: Function = null;

	constructor() {
		this.reset();
	}

	reset() {
		this.arrived = false;
		this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
		console.log(this.greeting)
	}
	clicked() {
		if (this.arrived) {
			this.reset();
		} else {
			setTimeout(()=>{
				this.resolve('hi there!');
			},6000);

			this.arrived = true;
		}
	}
}