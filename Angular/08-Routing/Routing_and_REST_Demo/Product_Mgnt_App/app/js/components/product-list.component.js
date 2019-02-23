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
var product_service_1 = require("../services/product.service");
var router_1 = require("@angular/router");
var ProductListComponent = (function () {
    function ProductListComponent(pService, router) {
        this.pService = pService;
        this.router = router;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pService
            .getProducts()
            .subscribe(function (resp) { _this.products = resp; }, function (error) { return console.log(error); });
    };
    ProductListComponent.prototype.navigate = function (id) {
        console.log(id);
        //this.router.navigate(['/rating']);
        this.router.navigate(['/rating', id]);
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'product-list',
            templateUrl: 'app/partials/product-list.html'
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map