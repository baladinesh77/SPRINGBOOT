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
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var identity_model_1 = require("../models/identity.model");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.loginChangeEvent = new core_1.EventEmitter();
    }
    AuthService.prototype.login = function (user) {
        var body = JSON.stringify({
            username: user.username,
            password: user.password
        });
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post("http://localhost:8060/api/users/validate", body, options)
            .map(function (resp) { return resp.json(); })
            .catch(function (err) { return Observable_1.Observable.throw(err.statusText); });
    };
    AuthService.prototype.logoff = function () {
        localStorage.clear();
        this.identity = new identity_model_1.Identity(undefined, false);
        this.loginChangeEvent.emit(this.identity);
    };
    AuthService.prototype.setAuthenticationInfo = function (username) {
        localStorage.setItem("username", username);
        this.identity = new identity_model_1.Identity(username, true);
        this.loginChangeEvent.emit(this.identity);
    };
    AuthService.prototype.isAuthenticted = function () {
        if (localStorage.getItem("username")) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.loadUserInfo = function () {
        if (localStorage.getItem("username")) {
            var username = localStorage.getItem("username");
            this.identity = new identity_model_1.Identity(username, true);
            this.loginChangeEvent.emit(this.identity);
        }
        else {
            this.identity = new identity_model_1.Identity(undefined, false);
            this.loginChangeEvent.emit(this.identity);
        }
    };
    return AuthService;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AuthService.prototype, "loginChangeEvent", void 0);
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=Auth.Service.js.map