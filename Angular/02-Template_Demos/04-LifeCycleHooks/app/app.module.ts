import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ListDataComponent} from "./components/list-data.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ListDataComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
