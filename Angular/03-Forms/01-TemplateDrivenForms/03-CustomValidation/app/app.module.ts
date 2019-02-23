import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";
import {DemoFormComponent} from "./components/demo-form";
import {NoSpecialCharacterValidator} from "./customvalidators/customvalidators";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        DemoFormComponent,
        NoSpecialCharacterValidator
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
