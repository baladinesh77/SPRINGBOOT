import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app works!';

	private testObject: { name: string, job?: string };

	constructor() {
		this.testObject={
			name:'abc', 
			job:'xyz'
		}
	}
	onChangeProperty(): void {
		this.testObject.name = "Sonu";
	}

	onChangeObject(): void {
		this.testObject = {
			name: 'Ajay',
			job: 'Developer'
		}
	}
}
