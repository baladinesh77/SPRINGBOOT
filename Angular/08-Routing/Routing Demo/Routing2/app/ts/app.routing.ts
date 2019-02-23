import {Routes, RouterModule} from '@angular/router'
import {ProductListComponent} from "./product-list.component";
import {ProductAddComponent} from "./product-add.component";
import {HomeComponent} from "./home.component";
import {ProductDetailComponent} from "./product-detail.component";
import {ProductOverviewComponent} from "./product-overview.component";
import {ProductSpecComponent} from "./specs.component";
import {ProductInfoComponent} from "./product-info.component";

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
		component:ProductDetailComponent,
		children: [
			{ path: '', redirectTo: 'overview', pathMatch: 'full' },
			{ path: 'overview', component: ProductOverviewComponent },
			{ path: 'specs', component: ProductSpecComponent }
		]
	},
	{
		path:'info',
		component:ProductInfoComponent,
		pathMatch:'full'
	},
	{
		path:'',
		redirectTo:'/home',
		pathMatch:'full'
	}
]

export  const routing=RouterModule.forRoot(appRoutes);