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
/*
Declare an output variable name and print it in the template
Apply or remove css styles using [clas.classname] directive
Declare a local variable inputText using #symbol and use it to decide whether the css class to be applied or not
use (keyup)="0" to update the UI on keychange, ie we are not calling any specific method.
 */
var MyComponent = (function () {
    function MyComponent() {
        this.name = "Sonu Sathyadas";
    }
    MyComponent = __decorate([
        core_1.Component({
            selector: 'my-component',
            template: "<h2>Sample component</h2>\n\t\t\t<p>\n\t\t\t\tHi, I am <span [style.backgroundColor]=\"inputText.value==='yes'?'lightgray':''\">{{name}}</span>, This is my Angular2 application.\n\t\t\t\t<span [class.is-awesome]=\"inputText.value==='yes'\">It's awesome</span>\n\t\t\t</p>\n\t\t\tIs it awesome?\n\t\t\t<input type=\"text\" #inputText (keyup)=\"0\">\n\t\t\t<br><br>\n\t\t\t<button [disabled]=\"inputText.value!=='yes'\">Submit</button>\n\t\t\t",
            styles: [
                ".is-awesome{\n\t\t\tfont-weight:bold;\n\t\t\tcolor:red;\n\t\t}"]
        }), 
        __metadata('design:paramtypes', [])
    ], MyComponent);
    return MyComponent;
}());
exports.MyComponent = MyComponent;
//# sourceMappingURL=my-component.component.js.map