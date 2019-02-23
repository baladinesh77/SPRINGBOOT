import {Component} from "@angular/core";
import {User} from "../models/user.model";
import {NoSpecialCharacterValidator} from "../customvalidators/customvalidators";

@Component({
	selector:'demo-form',
	templateUrl:'app/views/demo.html'
})
export class DemoFormComponent {

	private model:User=new User();

	constructor(){
	}

	public submit(){
		console.log(this.model);
	}
	public clear(){

	}
}