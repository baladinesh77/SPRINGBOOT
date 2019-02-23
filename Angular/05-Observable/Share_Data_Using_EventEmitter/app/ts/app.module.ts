import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';

import { AppComponent }  from './app.component';
import {EntryFormComponent} from "./entry-form.component";
import {ListItemComponent} from "./list-item.component";
import {UserShareService} from "./user-share.service";

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EntryFormComponent, ListItemComponent ],
  providers:[UserShareService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
