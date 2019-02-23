import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {EmployeeComponent} from "./components/employee.component";
import {EmployeeService} from "./services/employee.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent],
    providers:[EmployeeService],
    bootstrap: [AppComponent]
})
export class AppModule { }
