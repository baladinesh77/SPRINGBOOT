
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector:"register",
    templateUrl:"app/views/register.html"
})
export class RegisterComponent implements OnInit {
        
    private model:FormGroup;
    
    constructor(private fb:FormBuilder){
        
    }

    ngOnInit(): void {
        this.model=this.fb.group({
            Email:["",Validators.compose([Validators.required])],
            Password:["", Validators.compose([Validators.required, Validators.pattern("^......+")])],
            ConfirmPassword:["", Validators.compose([Validators.required, Validators.pattern("^......+")])],
        });
    }

    public register(){

    }

}