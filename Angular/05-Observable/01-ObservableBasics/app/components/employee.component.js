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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_1 = require("../models/employee");
var employee_service_1 = require("../services/employee.service");
var EmployeeComponent = (function () {
    function EmployeeComponent(empSvc) {
        this.empSvc = empSvc;
        this.languages = [
            { code: "EN", name: "English" },
            { code: "HI", name: "Hindi" },
            { code: "AR", name: "Arabic" },
            { code: "FR", name: "French" },
            { code: "OTH", name: "Other" }
        ];
        this.model = new employee_1.Employee("", "", false, "W2", "");
        this.hasPrimaryLanguageError = false;
    }
    EmployeeComponent.prototype.firstNameToUpperCase = function (value) {
        if (value.length > 0) {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        }
        else {
            this.model.firstName = value;
        }
    };
    EmployeeComponent.prototype.lastNameToUpperCase = function (value) {
        if (value.length > 0) {
            this.model.lastName = value.charAt(0).toUpperCase() + value.slice(1);
        }
        else {
            this.model.lastName = value;
        }
    };
    EmployeeComponent.prototype.validatePrimaryLanguage = function (value) {
        if (value === undefined || value === "") {
            this.hasPrimaryLanguageError = true;
        }
        else {
            this.hasPrimaryLanguageError = false;
        }
    };
    EmployeeComponent.prototype.submitForm = function (form) {
        //Angular cannot validate the select control validation by default.
        //Need to validate explicitly
        this.validatePrimaryLanguage(this.model.language);
        if (this.hasPrimaryLanguageError)
            return;
        else {
            //console.log("Submitted form data:");
            console.log(this.model);
            this.empSvc.AddEmployee(this.model)
                .subscribe(function (data) { return console.log("Success:", data); }, function (err) { return console.log("Error:", err); });
        }
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: "employee",
        templateUrl: "app/views/employee.html"
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map