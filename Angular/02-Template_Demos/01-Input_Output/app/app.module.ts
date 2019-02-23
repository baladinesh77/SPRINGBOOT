import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {EventListComponent} from './components/event-list.component';
import {EventThumbnailComponent} from './components/event-thumbnail.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent, 
        EventListComponent,
        EventThumbnailComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
