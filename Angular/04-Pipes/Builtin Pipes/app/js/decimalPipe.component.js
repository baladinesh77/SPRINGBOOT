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
var NumberPipeDemoComponent = (function () {
    function NumberPipeDemoComponent() {
        this.pi = 3.141;
        this.e = 2.718281828459045;
    }
    NumberPipeDemoComponent = __decorate([
        core_1.Component({
            selector: 'number-example',
            template: "<div>\n    \t\t\t<p>e (no formatting): {{e}}</p>\n    \t\t\t<p>e (3.1-5): {{e | number:'3.1-5'}}</p>\n    \t\t\t<p>pi (no formatting): {{pi}}</p>\n    \t\t\t<p>pi (3.5-5): {{pi | number:'3.5-5'}}</p>\n  \t\t</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], NumberPipeDemoComponent);
    return NumberPipeDemoComponent;
}());
exports.NumberPipeDemoComponent = NumberPipeDemoComponent;
//# sourceMappingURL=decimalPipe.component.js.map