import { Component } from '@angular/core';
import {RegisterComponent} from "./register.component";

@Component({
     selector: 'my-app',
     templateUrl: 'app/partials/app.html',
	directives:[RegisterComponent]
})
export class AppComponent {
	private names:string[]=["Ajay", "Sekhar","Kumar","Praveen"];
}


