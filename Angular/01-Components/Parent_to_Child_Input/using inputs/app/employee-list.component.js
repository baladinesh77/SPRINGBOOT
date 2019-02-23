"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_1 = require("./employee");
var EmployeeListComponent = (function () {
    function EmployeeListComponent() {
        this.employees = [];
        this.employees.push(new employee_1.Employee(101, 'Ajay', 'ajay@gmail.com', 12400.00));
        this.employees.push(new employee_1.Employee(102, 'Buvan', 'bhuvan@gmail.com', 12400.00));
        this.employees.push(new employee_1.Employee(103, 'Chandra', 'chandra@gmail.com', 12400.00));
        this.employees.push(new employee_1.Employee(104, 'Dinesh', 'dinesh@gmail.com', 12400.00));
        this.employees.push(new employee_1.Employee(105, 'Elizabeth', 'elizabeth@gmail.com', 12400.00));
    }
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'employee-list',
            templateUrl: 'app/views/employee-list.view.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map