
import {Component,Input,Output, EventEmitter} from '@angular/core';

@Component({
    selector:'event-thumbnail',
    templateUrl:'app/views/event-thumbnail.html'
})
export class EventThumbnailComponent{

    @Input() 
    private event:any;

    @Output()
    private clickEvent=new EventEmitter();

    private register(){
        this.clickEvent.emit(this.event);
    }
    private discountColor(){
        if(this.event.price<200)
            return 'green';
        else
            return 'black';
    }
    
}