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
var ProductService = (function () {
    function ProductService() {
        this.products = [
            { id: 101, name: "Orange", price: 80, quantity: 25 },
            { id: 102, name: "Apple", price: 240, quantity: 10 },
            { id: 103, name: "Grape", price: 120, quantity: 15 }
        ];
    }
    ProductService.prototype.getAllProducts = function () {
        return this.products;
    };
    ProductService.prototype.getProduct = function (id) {
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id == id) {
                return item;
            }
        }
        return;
    };
    ProductService.prototype.addProduct = function (product) {
        this.products.push(product);
        console.log(this.products);
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map