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
var ProductRatingComponent = (function () {
    function ProductRatingComponent(route) {
        var _this = this;
        this.route = route;
        this.route.snapshot.params["id"];
        this.route.params
            .subscribe(function (params) {
            _this.id = params["id"];
        });
    }
    ProductRatingComponent = __decorate([
        core_1.Component({
            selector: 'product-rating',
            template: "<div class=\"row\">\n\t\t\t<div class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t<h2>Product rating page</h2>\n\t\t\t\t<p>You selected product with id :{{id}}</p>\n\t\t\t</div>\n\t\t\t</div>"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], ProductRatingComponent);
    return ProductRatingComponent;
}());
exports.ProductRatingComponent = ProductRatingComponent;
//# sourceMappingURL=product-rating.component.js.map