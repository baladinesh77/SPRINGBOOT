

import {Component, OnInit} from "@angular/core";
import {User} from "../models/user.model";
import {AuthService} from "../services/Auth.Service";
import {Router} from "@angular/router";

@Component({
	selector:"login",
	templateUrl:"app/views/login.html"
})
export class LoginComponent implements OnInit{

	public model:User=new User();
	private hasError:boolean=false;
	private buttonCaption:string="Login";

	constructor(private authService:AuthService, private router:Router){
	}

	public ngOnInit(){
		if(this.authService.isAuthenticted()){
			this.router.navigate(['home']);
		}
	}

	public login():void{
		this.buttonCaption="Please wait...";
		this.authService.login(this.model)
			.subscribe(data=>{
				if(data===true){
					this.authService.setAuthenticationInfo(this.model.username);
					this.hasError=false;
					this.router.navigate(['home']);
				}else{
					this.hasError=true;
					this.buttonCaption="Login";
				}
			},this.handleLoginError)
	}

	public logoff():void{
		this.authService.logoff();
	}

	private handleLoginError(err){
		console.log("Login error", err);
	}
}