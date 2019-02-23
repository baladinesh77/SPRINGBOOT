import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HttpModule} from "@angular/http";
import {EmployeeListComponent} from "./employeelist.component";
import {EmployeeObservableService} from "./employeeobservable.service";
import {EmployeeEmitterService} from "./employeeemitter.service";

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, EmployeeListComponent],
    providers:[EmployeeObservableService, EmployeeEmitterService],
    bootstrap: [AppComponent]
})
export class AppModule { }
