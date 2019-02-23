

import {Component, Input} from "@angular/core";
import {Employee} from "./employee";
@Component({
    selector:'employee-item',
    templateUrl:'app/views/employee-listitem.view.html'
})
export class EmployeeListItemComponent{
    @Input()
    public employee:Employee;

}