import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DemoFormComponent} from "./components/demo-form";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        DemoFormComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
