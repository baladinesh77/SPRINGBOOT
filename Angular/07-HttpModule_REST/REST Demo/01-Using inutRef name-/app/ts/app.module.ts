import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HTTP_PROVIDERS} from "@angular/http";


@NgModule({
	imports: [BrowserModule],
  	declarations: [AppComponent],
  	bootstrap: [AppComponent],
  	providers:[HTTP_PROVIDERS]
})
export class AppModule { }
