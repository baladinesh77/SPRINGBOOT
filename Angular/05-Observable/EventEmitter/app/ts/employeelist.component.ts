
import {Component, OnInit} from "@angular/core";
import {EmployeeObservableService} from "./employeeobservable.service";
import {Employee} from "./employee";

@Component({
    selector:"employee-list",
    templateUrl:"app/partials/emplist.html"
})
export class EmployeeListComponent implements  OnInit{

    private employees:Employee[];

    constructor(private empService:EmployeeObservableService){

    }
    public ngOnInit(){
        this.empService.getData()
            .subscribe(
                data=>{ this.employees=data;},
                error=>{console.log(error);},
                ()=>{console.log("Completed");}
            );
    }
}