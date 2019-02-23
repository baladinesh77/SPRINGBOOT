
import {Component} from '@angular/core';
import {EventList} from '../models/event-list';
@Component({
    selector:'event-list',
    templateUrl:'app/views/event-list.html'
})
export class EventListComponent{
    private events:any[]=EventList;
    private status:string;

    constructor(){
        if(this.events.length==0)
            this.status="0";
        else if(this.events.length>0 && this.events.length<=4)
            this.status="1";
        else
            this.status="more";
    }

    private clickEventhandled(data){
        console.log(data);
    }
}