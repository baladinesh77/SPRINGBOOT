import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'complex-form',
    templateUrl : 'app/partials/complexform.html'
})

export class ComplexFormComponent {
    // The FormGroup object exposes various API’s for dealing with forms.
    // Here we are creating a new object and setting its type to FormGroup
    complexForm : FormGroup;

    // We are passing an instance of the FormBuilder to our constructor
    constructor(fb: FormBuilder){
        // Here we are using the FormBuilder to build out our form.
        this.complexForm = fb.group({
            // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
            'firstName' : [null, Validators.required],
            'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
            'gender' : [null, Validators.required],
            'hiking' : false,
            'running' : false,
            'swimming' : false
        })
    }

    // Again we’ll implement our form submit function that will just console.log the results of our form
    submitForm(value: any):void{
        console.log('Reactive Form Data: ')
        console.log(value);
    }
}