import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import {HomeComponent} from './components/home.component';
import {EventThumbnailComponent} from './components/event-thumbnail.component';
import {ReactiveRegisterEventComponent} from "./components/reactive-event.component";
import { AppRoutes } from "./app.routes";
import { EventService } from "./services/event.service";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        BrowserModule, 
        ReactiveFormsModule,
        HttpModule,
        AppRoutes
    ],
    declarations: [
        AppComponent, 
        HomeComponent, 
        EventThumbnailComponent,
        ReactiveRegisterEventComponent
    ],
    providers:[
        EventService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }