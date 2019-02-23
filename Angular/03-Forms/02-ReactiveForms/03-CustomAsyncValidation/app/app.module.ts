import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DemoFormComponent} from "./components/demo-form";
import {UserService} from "./services/user.service";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        DemoFormComponent
    ],
    providers:[
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
