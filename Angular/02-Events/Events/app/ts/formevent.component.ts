
import {Component} from "@angular/core";

@Component({
	selector:'<form-data>',
	templateUrl:'app/partials/form.html'
})
export  class FormEventComponent{

	public user:any={
		name:'abc',
		age:20
	}
	onBlur(event){
		console.log(event.target.value);
	}
	onKeyup(event){
		console.log(event.key)
	}
}