import {Routes, RouterModule} from '@angular/router'
import {ProductListComponent} from "./product-list.component";
import {ProductAddComponent} from "./product-add.component";
import {HomeComponent} from "./home.component";
import {ProductDetailComponent} from "./product-detail.component";

const appRoutes:Routes=[
	{
		path:'home',
		component:HomeComponent
	},
	{
		path:'list',
		component:ProductListComponent
	},
	{
		path:'add',
		component:ProductAddComponent
	},
	{
		path:'detail/:id',
		component:ProductDetailComponent
	},
	{
		path:'',
		redirectTo:'/home',
		pathMatch:'full'
	}
]

export  const routing=RouterModule.forRoot(appRoutes);