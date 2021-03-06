import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {CustomValidators} from "../customvalidators/customvalidators";
import {AyncValidators} from "../customvalidators/asyncvalidators";

@Component({
	selector:'demo-form',
	templateUrl:'app/views/demo.html'
})
export class DemoFormComponent implements OnInit{

	form:FormGroup;

	constructor(private fb:FormBuilder){
	}

	public ngOnInit(){
		this.form=this.fb.group({
			firstName:["", Validators.compose([Validators.required,
				Validators.minLength(3),
				CustomValidators.noSpecialChars])],
			lastName:["",Validators.required],
			//userName:["",Validators.required, AyncValidators.userExists], //single validator
			userName:["",Validators.compose([Validators.required]), Validators.composeAsync([AyncValidators.userExists])]
		})
	}

	public submit(){
		console.log(this.form.value)
	}
	public clear(){
		this.form.reset();
	}
}