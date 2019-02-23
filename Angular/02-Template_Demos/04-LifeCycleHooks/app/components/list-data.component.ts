
import {Component,Input,OnInit, OnChanges,OnDestroy} from '@angular/core';

@Component({
    selector:'list-data',
    templateUrl:'app/views/list-data.html'
})
export class ListDataComponent implements OnInit, OnDestroy, OnChanges{

    @Input()
    private name;

    constructor(){
        console.log("constructor executed");
    }

    public ngOnInit(){
        console.log("OnInit executed");
    }

    public ngOnChanges(){
        console.log("OnChanges executed");
    }

    public ngOnDestroy(){
        console.log("OnDestroy executed");
    }

}