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
var Demo1Component = (function () {
    function Demo1Component() {
    }
    Demo1Component = __decorate([
        core_1.Component({
            selector: 'demo1',
            template: "<div class=\"row\">\n\t\t\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t\t\t<h3>{{title}}</h3>\n\t\t\t\t<p>{{content}}</p>\n\t\t\t</div>\n\t\t\t</div>",
            inputs: ['content', 'title']
        }), 
        __metadata('design:paramtypes', [])
    ], Demo1Component);
    return Demo1Component;
}());
exports.Demo1Component = Demo1Component;
//# sourceMappingURL=demo1.component.js.map