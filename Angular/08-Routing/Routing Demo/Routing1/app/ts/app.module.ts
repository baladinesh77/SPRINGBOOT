import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ProductListComponent} from "./product-list.component";
import {ProductAddComponent} from "./product-add.component";
import {FormsModule} from "@angular/forms";
import {ProductService} from "./product.service";
import {routing} from "./app.routing";
import {HomeComponent} from "./home.component";
import {ProductDetailComponent} from "./product-detail.component";

@NgModule({
  	imports: [
  		BrowserModule,
		FormsModule,
		routing
	],
  	declarations: [
  		AppComponent,
		ProductListComponent,
		ProductAddComponent,
		HomeComponent,
		ProductDetailComponent
	],
  	providers:[
  		ProductService
	],
  	bootstrap: [ AppComponent ]
})
export class AppModule { }
