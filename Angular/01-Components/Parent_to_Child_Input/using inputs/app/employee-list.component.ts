
import {Component} from "@angular/core";
import {Employee} from "./employee";
@Component({
    selector:'employee-list',
    templateUrl:'app/views/employee-list.view.html'
})
export class EmployeeListComponent{
    public employees:Employee[];

    constructor(){
        this.employees=[];
        this.employees.push(new Employee(101,'Ajay','ajay@gmail.com',12400.00));
        this.employees.push(new Employee(102,'Buvan','bhuvan@gmail.com',12400.00));
        this.employees.push(new Employee(103,'Chandra','chandra@gmail.com',12400.00));
        this.employees.push(new Employee(104,'Dinesh','dinesh@gmail.com',12400.00));
        this.employees.push(new Employee(105,'Elizabeth','elizabeth@gmail.com',12400.00));
    }
}