
import { Component, OnInit } from '@angular/core';
import { EventService } from "../services/event.service";


@Component({
    selector:"home",
    templateUrl:'app/views/home.html',
    styleUrls:["app/css/home.styles.css"]
})
export class HomeComponent implements OnInit {        

    private data:any[];
    private today=new Date();

    constructor(private eventSvc:EventService){        
    }

    ngOnInit(): void {
        this.eventSvc.getEvents()
        .subscribe(
            result=>this.data=result,
            err=>console.log(err)
        );
    }

    public Clicked(data){
        console.log("Child passed the data : ", data)
    }
}