import {Component} from '@angular/core'
@Component({
     selector: 'my-app',
     templateUrl:'app/partials/app.html',
	styleUrls:['app/css/app.css']
})

export class AppComponent {
	private name: string;
	private clients: any;
	private selectedClient: string;
	private clientName: string;

	constructor() {
		this.name = "Sonu Sathyadas";
		this.clients = ['Cognizant', 'Wipro', 'Godrej', 'CapGemini'];
	}

	//if passing $event as the argument of onClick() from view
	/*onClick(e){
	 this.favorite=e.target.innerText;
	 }*/

	onClick(client) {
		this.clientName = client;
		//alert("You selected "  + client);
	}

	addClient() {
		if (this.clientName.trim() != "") {
			this.clients.push(this.clientName);
			this.clientName = '';
		}
	}
}
