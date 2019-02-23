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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var ProductService = (function () {
    //apiEndpoint:string;
    //Use this constructor if API_ENDPOINT is injected from module
    function ProductService(http, apiEndpoint) {
        this.http = http;
        this.apiEndpoint = apiEndpoint;
    }
    //use this constructor if API_ENDPOINT is declared as exportable constant
    /*constructor(private http: Http) {
        this.apiEndpoint=API_ENDPOINT;
    }*/
    ProductService.prototype.getProducts = function () {
        return this.http
            .get(this.apiEndpoint)
            .map(function (resp) { return resp.json(); });
    };
    ProductService.prototype.addProduct = function (product) {
        var body = JSON.stringify(product);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post(this.apiEndpoint + "/add", body, options)
            .map(function (res) { return res.json(); }) //Returns an observable (Stream of events)
            .catch(function (error) {
            return Observable_1.Observable.throw("Server error");
        });
    };
    ProductService.prototype.getProduct = function (id) {
        return this.http
            .get(this.apiEndpoint + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return Observable_1.Observable.throw("Server Error");
        });
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('API_ENDPOINT')), 
        __metadata('design:paramtypes', [http_1.Http, String])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map