import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ListDataComponent} from "./components/list-data.component";
import{InitCapPipe} from "./pipes/initcap.pipe";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ListDataComponent,InitCapPipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
