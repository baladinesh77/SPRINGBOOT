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
var router_1 = require("@angular/router");
var ProductInfoComponent = (function () {
    function ProductInfoComponent(route) {
        this.route = route;
    }
    ProductInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = params["id"];
            _this.name = params["name"];
        });
    };
    ProductInfoComponent = __decorate([
        core_1.Component({
            selector: 'product-info',
            templateUrl: 'app/partials/product-info.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], ProductInfoComponent);
    return ProductInfoComponent;
}());
exports.ProductInfoComponent = ProductInfoComponent;
//# sourceMappingURL=product-Info.component.js.map