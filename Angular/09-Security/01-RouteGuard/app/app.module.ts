import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutes} from "./app.routes";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {HomeComponent} from "./components/home.component";
import {LoginComponent} from "./components/login.component";
import {AboutComponent} from "./components/about.component";
import {LoginInfoComponent} from "./components/login-info.component";
import {AuthService} from "./services/Auth.Service";
import {AuthGuard} from "./services/auth.guard";
import {UrlSerializer} from "@angular/router";
import {LowerCaseUrlSerializer} from "./lowercase.urlserializer";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutes,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        AboutComponent,
        LoginInfoComponent
    ],
    providers:[
        {
            provide:UrlSerializer,
            useClass:LowerCaseUrlSerializer
        },
		AuthService,
        AuthGuard
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
