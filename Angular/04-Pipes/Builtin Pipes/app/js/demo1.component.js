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
var AsyncPipeDemoComponent = (function () {
    function AsyncPipeDemoComponent() {
        this.greeting = null;
        this.arrived = false;
        this.resolve = null;
        this.reset();
    }
    AsyncPipeDemoComponent.prototype.reset = function () {
        var _this = this;
        this.arrived = false;
        this.greeting = new Promise(function (resolve, reject) { _this.resolve = resolve; });
        console.log(this.greeting);
    };
    AsyncPipeDemoComponent.prototype.clicked = function () {
        var _this = this;
        if (this.arrived) {
            this.reset();
        }
        else {
            setTimeout(function () {
                _this.resolve('hi there!');
            }, 3000);
            this.arrived = true;
        }
    };
    AsyncPipeDemoComponent = __decorate([
        core_1.Component({
            selector: 'async-example',
            template: "<div>\n    \t\t\t\t<p>Wait for it... {{ greeting | async }}</p>\n    \t\t\t\t<button (click)=\"clicked()\">{{ arrived ? 'Reset' : 'Resolve' }}</button>\n  \t\t\t</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], AsyncPipeDemoComponent);
    return AsyncPipeDemoComponent;
}());
exports.AsyncPipeDemoComponent = AsyncPipeDemoComponent;
//# sourceMappingURL=demo1.component.js.map