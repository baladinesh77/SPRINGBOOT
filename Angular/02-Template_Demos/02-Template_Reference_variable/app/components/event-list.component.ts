
import {Component} from '@angular/core';

@Component({
    selector:'event-list',
    templateUrl:'app/views/event-list.html'
})
export class EventListComponent{
    private event:any={
        name:'Angular2 Fundamentals',
        location:'Mumbai',
        price:240.00,
        date:'12-Apr-2017',
        time:'9:30 am'
    }

    private clickEventhandled(data){
        console.log(data);
    }
}