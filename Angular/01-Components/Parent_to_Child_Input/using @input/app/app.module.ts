import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {EmployeeListComponent} from "./employee-list.component";
import {EmployeeListItemComponent} from "./employee-listitem.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeListComponent, EmployeeListItemComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
