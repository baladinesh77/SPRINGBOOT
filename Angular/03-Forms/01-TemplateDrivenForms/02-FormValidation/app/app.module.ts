import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home.component";
import {FormsModule} from "@angular/forms";
import {EmployeeComponent} from "./components/employee.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, HomeComponent, EmployeeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
