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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var Observable_1 = require("rxjs/Observable");
var UserService = (function () {
    function UserService() {
        var injector = core_1.ReflectiveInjector.resolveAndCreate([
            http_1.Http,
            http_1.BrowserXhr,
            { provide: http_1.RequestOptions, useClass: http_1.BaseRequestOptions },
            { provide: http_1.ResponseOptions, useClass: http_1.BaseResponseOptions },
            { provide: http_1.ConnectionBackend, useClass: http_1.XHRBackend },
            { provide: http_1.XSRFStrategy, useFactory: function () { return new http_1.CookieXSRFStrategy(); } },
        ]);
        this.http = injector.get(http_1.Http);
    }
    UserService.prototype.userExists = function (username) {
        return this.http.get("http://localhost:8060/api/users")
            .map(function (resp) {
            for (var _i = 0, _a = resp.json(); _i < _a.length; _i++) {
                var uname = _a[_i];
                if (uname === username) {
                    return true;
                }
            }
            return false;
        })
            .catch(function (err) { return Observable_1.Observable.throw(err.statusText); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map