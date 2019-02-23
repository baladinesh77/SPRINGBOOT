"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_1 = require("../models/employee");
var HomeComponent = (function () {
    function HomeComponent() {
        this.languages = [
            { code: "EN", name: "English" },
            { code: "HI", name: "Hindi" },
            { code: "AR", name: "Arabic" },
            { code: "FR", name: "French" },
            { code: "OTH", name: "Other" }
        ];
        this.model = new employee_1.Employee("Kedar", "Nath", false, "1099", "HI");
    }
    HomeComponent.prototype.firstNameToUpperCase = function (value) {
        if (value.length > 0) {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        }
        else {
            this.model.firstName = value;
        }
    };
    HomeComponent.prototype.lastNameToUpperCase = function (value) {
        if (value.length > 0) {
            this.model.lastName = value.charAt(0).toUpperCase() + value.slice(1);
        }
        else {
            this.model.lastName = value;
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: "app/views/home.html"
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map