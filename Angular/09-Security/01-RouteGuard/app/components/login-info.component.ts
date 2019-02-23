/**
 * Created by sonusathyadas on 12-03-2017.
 */

import {Component, OnInit} from "@angular/core";
import {AuthService} from "../services/Auth.Service";
import {Router} from "@angular/router";
import {Identity} from "../models/identity.model";
@Component({
	selector:"login-info",
	templateUrl:"app/views/login-info.html"
})
export class LoginInfoComponent implements OnInit{
	constructor(private authService:AuthService, private router:Router){

	}

	private identity:Identity;

	public ngOnInit(){
		this.authService.loginChangeEvent.subscribe(data=>this.identity=data);
		this.authService.loadUserInfo();
		console.log(this.identity);
	}

	public logoff(){
		this.authService.logoff();
		this.router.navigate(['login']);
	}
}