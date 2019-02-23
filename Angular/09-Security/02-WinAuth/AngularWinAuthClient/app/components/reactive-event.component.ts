
import {Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { EventService } from "../services/event.service";
import { Router } from "@angular/router";

@Component({
    selector:"reactive-register",
    templateUrl:"app/views/reactive-register.html"
})
export class ReactiveRegisterEventComponent implements OnInit{
    private locations:any[]=[
        {name:"Hydrabad", value:"HYD"},
        {name:"Bengaluru", value:"BEN"},
        {name:"Mumbai",value:"MUM"},
        {name:"Pune",value:"PUN"},
        {name:"Chennai", value:"CHN"}
    ];

    private model:FormGroup;
    private timeCtrl=new FormControl("",Validators.required);

    constructor(private fb:FormBuilder, private eventSvc:EventService, private router:Router){
    }

    public ngOnInit(){
        this.model=this.fb.group({
            name:["",Validators.compose([Validators.required, Validators.pattern('^...+')])],
            location:["",Validators.required],
            price:[undefined, Validators.required],
            date:["",Validators.required],
            time:this.timeCtrl
        });
    }

    public register(){
        this.eventSvc.addEvent(this.model.value)
        .subscribe(
            result=>{
                this.router.navigate([""]);
            },
            err=>{
                alert("Error in adding data");
            });
    }


}