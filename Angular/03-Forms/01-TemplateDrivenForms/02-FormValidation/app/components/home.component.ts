
import {Component} from "@angular/core";
import {Employee} from "../models/employee";
@Component({
	selector:"home",
	templateUrl:"app/views/home.html"
})
export class HomeComponent{
	private  languages:any[]=[
		{code:"EN", name:"English"},
		{code:"HI", name:"Hindi"},
		{code:"AR", name:"Arabic"},
		{code:"FR", name:"French"},
		{code:"OTH", name:"Other"}
	];
	model=new Employee("Kedar", "Nath",false,"1099","HI");

	firstNameToUpperCase(value:string){
		if(value.length>0) {
			this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
		}else{
			this.model.firstName=value;
		}
	}
	lastNameToUpperCase(value:string){
		if(value.length>0) {
			this.model.lastName = value.charAt(0).toUpperCase() + value.slice(1);
		}else{
			this.model.lastName=value;
		}
	}
}