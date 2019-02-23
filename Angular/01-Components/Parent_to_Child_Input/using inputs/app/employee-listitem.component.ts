

import {Component, Input} from "@angular/core";
import {Employee} from "./employee";
@Component({
    selector:'employee-item',
    templateUrl:'app/views/employee-listitem.view.html',
    inputs:['employee']
})
export class EmployeeListItemComponent{
    public employee:Employee;

}