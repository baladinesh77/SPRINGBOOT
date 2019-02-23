
import {Component} from "@angular/core";
@Component({
    selector:'register-form',
    templateUrl:'app/views/register.view.html'
})
export class RegisterComponent{
    public firstname:string;
    public lastname:string;
    public email:string;
    public age:number;

    constructor(){
        this.firstname="sonu";
        this.lastname="sathyadas";
        this.email="sonusathyads@gmail.com";
        this.age=30;
    }

    public save():void{
        console.log("Name=" + this.firstname + " " + this.lastname);
        console.log("Email=" + this.email);
        console.log("Age=" + this.age);
    }
}