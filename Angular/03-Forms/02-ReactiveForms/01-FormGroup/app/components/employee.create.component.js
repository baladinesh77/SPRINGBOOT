/**
 * Created by sonusathyadas on 13-03-2017.
 */
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
var CreateEmployeeComponent = (function () {
    function CreateEmployeeComponent(fb) {
        this.fb = fb;
        this.languages = [
            { code: "EN", name: "English" },
            { code: "HI", name: "Hindi" },
            { code: "AR", name: "Arabic" },
            { code: "FR", name: "French" },
        ];
        //Form controls can be delared individually using new FormControl, or directly define
        //inside the fb.group() method as an array, first element in array is initial value,
        //subsequent values are validators
        this.emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.firstnameCtrl = new forms_1.FormControl("", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)]));
        this.lastnameCtrl = new forms_1.FormControl("", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)]));
        this.emailCtrl = new forms_1.FormControl("", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern(this.emailRegex)]));
        this.languageCtrl = new forms_1.FormControl("", forms_1.Validators.required);
        this.cityCtrl = new forms_1.FormControl("", forms_1.Validators.required);
        this.countryCtrl = new forms_1.FormControl("", forms_1.Validators.required);
    }
    CreateEmployeeComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            firstName: this.firstnameCtrl,
            lastName: this.lastnameCtrl,
            email: this.emailCtrl,
            isFulltime: [false],
            payType: ["W2"],
            language: this.languageCtrl,
            address: this.fb.group({
                city: this.cityCtrl,
                country: this.countryCtrl
            })
        });
    };
    CreateEmployeeComponent.prototype.register = function () {
        console.log(this.form);
    };
    return CreateEmployeeComponent;
}());
CreateEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'employee-create',
        templateUrl: 'app/views/emp-create.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], CreateEmployeeComponent);
exports.CreateEmployeeComponent = CreateEmployeeComponent;
//# sourceMappingURL=employee.create.component.js.map