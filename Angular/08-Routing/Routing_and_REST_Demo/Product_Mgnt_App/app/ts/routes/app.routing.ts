
import {ProductListComponent} from "../components/product-list.component";
import {ProductAddComponent} from "../components/product-add.component";
import {Routes, RouterModule} from "@angular/router";
import {ProductDetailComponent} from "../components/product-detail.component";
import {ProductInfoComponent} from "../components/product-Info.component";
import {ProductSpecComponent} from "../components/product-spec.component";
import {ProductGalleryComponent} from "../components/product-gallery.component";
import {ProductRatingComponent} from "../components/product-rating.component";

const routes:Routes=[
	{
		path:'home',
		component:ProductListComponent
	},
	{
		path:'add',
		component:ProductAddComponent
	},
	{
		path:'detail/:id', // http://www.servername.com/detail/101
		component:ProductDetailComponent,
		children:[
			{
				path:'spec', //http://www.servername.com/detail/101/spec
				component:ProductSpecComponent
			},
			{
				path:'gallery',//http://www.servername.com/detail/101/gallery
				component:ProductGalleryComponent
			},
			{
				path:'', //http://www.servername.com/detail/101
				redirectTo:'spec',
				pathMatch: 'full'
			}
		]
	},
	{
		path:'info', // http://www.servername.com/info;id=101;name=Mango
		component:ProductInfoComponent,
	},
	{
		path:'rating/:id', // http://www.servername.com/rating/101
		component:ProductRatingComponent,
	},
	{
		path:'',
		redirectTo:'/home',
		pathMatch:'full'
	}
];

export const routing=RouterModule.forRoot(routes);