/**
 * Created by sonusathyadas on 13-03-2017.
 */

import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
	selector:'employee-create',
	templateUrl:'app/views/emp-create.html'
})
export class CreateEmployeeComponent implements OnInit{

	private languages=[
		{code:"EN", name:"English"},
		{code:"HI", name:"Hindi"},
		{code:"AR", name:"Arabic"},
		{code:"FR", name:"French"},
	];
	private form:FormGroup;

	//Form controls can be delared individually using new FormControl, or directly define
	//inside the fb.group() method as an array, first element in array is initial value,
	//subsequent values are validators
	private emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
	private firstnameCtrl:FormControl=new FormControl("",
		Validators.compose([Validators.required, Validators.minLength(3)]));
	private lastnameCtrl:FormControl=new FormControl("",
		Validators.compose([Validators.required, Validators.minLength(3)]));
	private emailCtrl:FormControl=new FormControl("",
		Validators.compose([Validators.required, Validators.pattern(this.emailRegex)]));
	private languageCtrl:FormControl=new FormControl("",Validators.required);
	private cityCtrl:FormControl=new FormControl("",Validators.required);
	private countryCtrl:FormControl=new FormControl("", Validators.required);

	constructor(private fb:FormBuilder){

	}

	public ngOnInit(){
		this.form=this.fb.group({
			firstName:this.firstnameCtrl,
			lastName:this.lastnameCtrl,
			email:this.emailCtrl,
			isFulltime:[false],
			payType:["W2"],
			language:this.languageCtrl,
			address:this.fb.group({
				city:this.cityCtrl,
				country:this.countryCtrl
			})
		})
	}
	public register(){
		console.log(this.form);
	}
}