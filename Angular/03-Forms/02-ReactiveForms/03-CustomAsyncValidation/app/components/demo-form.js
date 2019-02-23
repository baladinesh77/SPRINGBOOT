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
var forms_1 = require("@angular/forms");
var customvalidators_1 = require("../customvalidators/customvalidators");
var asyncvalidators_1 = require("../customvalidators/asyncvalidators");
var DemoFormComponent = (function () {
    function DemoFormComponent(fb) {
        this.fb = fb;
    }
    DemoFormComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            firstName: ["", forms_1.Validators.compose([forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    customvalidators_1.CustomValidators.noSpecialChars])],
            lastName: ["", forms_1.Validators.required],
            //userName:["",Validators.required, AyncValidators.userExists], //single validator
            userName: ["", forms_1.Validators.compose([forms_1.Validators.required]), forms_1.Validators.composeAsync([asyncvalidators_1.AyncValidators.userExists])]
        });
    };
    DemoFormComponent.prototype.submit = function () {
        console.log(this.form.value);
    };
    DemoFormComponent.prototype.clear = function () {
        this.form.reset();
    };
    return DemoFormComponent;
}());
DemoFormComponent = __decorate([
    core_1.Component({
        selector: 'demo-form',
        templateUrl: 'app/views/demo.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], DemoFormComponent);
exports.DemoFormComponent = DemoFormComponent;
//# sourceMappingURL=demo-form.js.map