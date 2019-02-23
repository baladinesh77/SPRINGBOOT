
import {Component} from "@angular/core";
import {Employee} from "../models/employee";
import {NgForm} from "@angular/forms";

@Component({
	selector:"employee",
	templateUrl:"app/views/employee.html"
})
export class EmployeeComponent{
	private  languages:any[]=[
		{code:"EN", name:"English"},
		{code:"HI", name:"Hindi"},
		{code:"AR", name:"Arabic"},
		{code:"FR", name:"French"},
		{code:"OTH", name:"Other"}
	];
	model=new Employee("","",false,"W2","");
	hasPrimaryLanguageError:boolean=false;

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
	validatePrimaryLanguage(value){
		if(value===undefined || value===""){
			this.hasPrimaryLanguageError=true;
		}else{
			this.hasPrimaryLanguageError=false;
		}
	}

	submitForm(form:NgForm){
		//Angular cannot validate the select control validation by default.
		//Need to validate explicitly
		this.validatePrimaryLanguage(this.model.language);
		if(this.hasPrimaryLanguageError)
			return;
		else {
			console.log("Submitted form data:");
			console.log(this.model);
		}
	}
}