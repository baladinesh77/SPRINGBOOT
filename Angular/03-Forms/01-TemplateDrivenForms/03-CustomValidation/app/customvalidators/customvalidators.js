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
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
//selector: '[noSpecialChars][ngModel]',
//{ provide: NG_VALIDATORS, useExisting: NoSpecialCharacterValidator, multi: true }
//Provider name is NG_VALIDATORS, and we need to use a class for the provider that
//is mentioned in useExisting, and NG_VALIDATORS can have multiple providers
//so we need to specify multi:true (ie other validators can also be used)
var NoSpecialCharacterValidator = NoSpecialCharacterValidator_1 = (function () {
    function NoSpecialCharacterValidator() {
        this.validator = this.specialCharactersValidationFactory();
    }
    NoSpecialCharacterValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    NoSpecialCharacterValidator.prototype.specialCharactersValidationFactory = function () {
        return function (ctrl) {
            if (ctrl.valid == undefined) {
                return null;
            }
            if (ctrl.value == undefined || (ctrl.value.indexOf(".") == -1 && ctrl.value.indexOf(" ") == -1)) {
                return null;
            }
            else {
                return {
                    nospecialchars: {
                        valid: false
                    }
                };
            }
        };
    };
    return NoSpecialCharacterValidator;
}());
NoSpecialCharacterValidator = NoSpecialCharacterValidator_1 = __decorate([
    core_1.Directive({
        selector: '[noSpecialChars]',
        providers: [
            { provide: forms_1.NG_VALIDATORS, useExisting: NoSpecialCharacterValidator_1, multi: true }
        ]
    }),
    __metadata("design:paramtypes", [])
], NoSpecialCharacterValidator);
exports.NoSpecialCharacterValidator = NoSpecialCharacterValidator;
var NoSpecialCharacterValidator_1;
//# sourceMappingURL=customvalidators.js.map