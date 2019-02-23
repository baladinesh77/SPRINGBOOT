
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./components/login.component";
import {HomeComponent} from "./components/home.component";
import {AboutComponent} from "./components/about.component";
import {AuthGuard} from "./services/auth.guard";

var routes:Routes=[
	{
		path:"login",
		component:LoginComponent
	},
	{
		path:"home",
		component:HomeComponent,
		canActivate:[AuthGuard]
	},
	{
		path:"about",
		component:AboutComponent
	},
	{
		path:"",
		redirectTo:"/login",
		pathMatch:"full"
	}
];

export const AppRoutes=RouterModule.forRoot(routes);