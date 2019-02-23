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
var core_1 = require('@angular/core');
var RegisterComponent = (function () {
    function RegisterComponent() {
        this.gender = "male";
    }
    RegisterComponent.prototype.register = function () {
        console.log("Name:" + this.name);
        console.log("Email:" + this.email);
        console.log("Address:" + this.address);
        console.log("Gender:" + this.gender);
        console.log("Agree:" + this.agree);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: '<register-form>',
            templateUrl: 'app/partials/register.html'
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map