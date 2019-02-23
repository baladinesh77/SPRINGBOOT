import {Component} from '@angular/core';
import {Contact} from "./contact";

@Component({
	selector:'custom-pipes',
	templateUrl:'app/partials/custom-pipe.html'
})

export  class CustomPipeComponent{
	contacts:Contact[];
	searchText:string;

	constructor(){
		this.contacts=[
			{name:"Sangeet", mobile:"894758698"},
			{name:"Abhay", mobile:"89325475869"},
			{name:"Sagar", mobile:"9682754822"},
			{name:"Abhinand", mobile:"8685744578"},
			{name:"Bhuvanesh", mobile:"9685745689"},
			{name:"Bhuvan", mobile:"9686857456"}
		]
	}
}