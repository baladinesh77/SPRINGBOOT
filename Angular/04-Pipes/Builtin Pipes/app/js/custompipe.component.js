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
var CustomPipeComponent = (function () {
    function CustomPipeComponent() {
        this.contacts = [
            { name: "Sangeet", mobile: "894758698" },
            { name: "Abhay", mobile: "89325475869" },
            { name: "Sagar", mobile: "9682754822" },
            { name: "Abhinand", mobile: "8685744578" },
            { name: "Bhuvanesh", mobile: "9685745689" },
            { name: "Bhuvan", mobile: "9686857456" }
        ];
    }
    CustomPipeComponent = __decorate([
        core_1.Component({
            selector: 'custom-pipes',
            templateUrl: 'app/partials/custom-pipe.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CustomPipeComponent);
    return CustomPipeComponent;
}());
exports.CustomPipeComponent = CustomPipeComponent;
//# sourceMappingURL=custompipe.component.js.map