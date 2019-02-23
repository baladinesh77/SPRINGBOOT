
import {Component,Input,Output, EventEmitter} from '@angular/core';

@Component({
    selector:'event-thumbnail',
    templateUrl:'app/views/event-thumbnail.html'
})
export class EventThumbnailComponent{

    @Input() 
    private event:any;

    @Output()
    private eventClick=new EventEmitter();

    private register(){
        this.eventClick.emit(this.event);
    }
}