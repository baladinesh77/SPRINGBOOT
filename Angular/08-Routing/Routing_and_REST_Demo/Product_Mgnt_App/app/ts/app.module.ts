import {NgModule, provide}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ProductService} from "./services/product.service";
import {ProductListComponent} from "./components/product-list.component";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {routing} from "./routes/app.routing";
import {ProductAddComponent} from "./components/product-add.component";
import {ProductDetailComponent} from "./components/product-detail.component";
import {ProductSpecComponent} from "./components/product-spec.component";
import {ProductInfoComponent} from "./components/product-Info.component";
import {ProductGalleryComponent} from "./components/product-gallery.component";
import {ProductRatingComponent} from "./components/product-rating.component";

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		routing
	],
	declarations: [
		AppComponent,
		ProductListComponent,
		ProductAddComponent,
		ProductDetailComponent,
		ProductDetailComponent,
		ProductSpecComponent,
		ProductGalleryComponent,
		ProductInfoComponent,
		ProductRatingComponent
	],
	providers: [
		ProductService,
		{ provide: 'API_ENDPOINT', useValue: 'http://localhost:60456/api/products/' }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
