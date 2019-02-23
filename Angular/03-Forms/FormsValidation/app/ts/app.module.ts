import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {SimpleFormComponent} from "./simpleform.component";
import {ComplexFormComponent} from "./complexform.component";

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
  ],
  declarations: [
      AppComponent,
      SimpleFormComponent,
      ComplexFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }