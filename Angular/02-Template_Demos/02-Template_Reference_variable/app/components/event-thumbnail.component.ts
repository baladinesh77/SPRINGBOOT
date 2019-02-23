
import {Component,Input,Output, EventEmitter} from '@angular/core';

@Component({
    selector:'event-thumbnail',
    templateUrl:'app/views/event-thumbnail.html'
})
export class EventThumbnailComponent{

    @Input() 
    private event:any;

    private registerThis(){
        console.log('You clicked on ' + this.event.name);
    }
}