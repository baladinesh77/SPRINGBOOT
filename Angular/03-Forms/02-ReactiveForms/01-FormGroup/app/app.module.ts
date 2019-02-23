import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CreateEmployeeComponent} from './components/employee.create.component';
@NgModule({
    imports: [
        BrowserModule,
    	ReactiveFormsModule
	],
    declarations: [
    	AppComponent,
		CreateEmployeeComponent
	],
    bootstrap: [AppComponent]
})
export class AppModule { }
