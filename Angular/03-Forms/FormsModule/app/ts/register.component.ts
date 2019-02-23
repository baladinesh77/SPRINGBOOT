
import {Component} from '@angular/core'

@Component({
	selector:'register-form',
	templateUrl:'app/partials/register.html'
})
export  class RegisterComponent{
	public name:string;
	public email:string;
	public address:string;
	public gender:string;
	public agree:boolean;

	constructor(){
		this.gender="male";
	}
	register(){
		console.log("Name:" + this.name);
		console.log("Email:" + this.email);
		console.log("Address:" + this.address);
		console.log("Gender:" + this.gender);
		console.log("Agree:" + this.agree);
	}
}