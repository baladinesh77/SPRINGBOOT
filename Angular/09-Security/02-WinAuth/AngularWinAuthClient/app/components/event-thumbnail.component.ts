
import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector:"event-thumbnail",
    templateUrl:"app/views/event-thumbnail.html"
})
export class EventThumbnailComponent{

    @Input()
    private event:any;
    @Input()
    private index:number;

    private currencyCode:string="INR";


    @Output()
    private clickEvent=new EventEmitter();

    public register():void{
        this.clickEvent.emit(this.event);
    }
}