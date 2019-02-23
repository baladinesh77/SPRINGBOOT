import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ReversePipe, StartsWithPipe}  from './custom.pipe';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [ BrowserModule , FormsModule],
  declarations: [ AppComponent ,ReversePipe, StartsWithPipe],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
