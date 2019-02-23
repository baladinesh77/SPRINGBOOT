import { Component } from '@angular/core';
import {FormEventComponent} from "./formevent.component";

@Component({
	selector: 'my-app',
	templateUrl: 'app/partials/app.html',
	directives:[FormEventComponent]
})
export class AppComponent {
	private names:string[]=["Ajay", "Sekhar","Kumar","Praveen"];
}


