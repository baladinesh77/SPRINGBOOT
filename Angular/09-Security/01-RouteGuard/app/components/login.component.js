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
var user_model_1 = require("../models/user.model");
var Auth_Service_1 = require("../services/Auth.Service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.model = new user_model_1.User();
        this.hasError = false;
        this.buttonCaption = "Login";
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isAuthenticted()) {
            this.router.navigate(['home']);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.buttonCaption = "Please wait...";
        this.authService.login(this.model)
            .subscribe(function (data) {
            if (data === true) {
                _this.authService.setAuthenticationInfo(_this.model.username);
                _this.hasError = false;
                _this.router.navigate(['home']);
            }
            else {
                _this.hasError = true;
                _this.buttonCaption = "Login";
            }
        }, this.handleLoginError);
    };
    LoginComponent.prototype.logoff = function () {
        this.authService.logoff();
    };
    LoginComponent.prototype.handleLoginError = function (err) {
        console.log("Login error", err);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "login",
        templateUrl: "app/views/login.html"
    }),
    __metadata("design:paramtypes", [Auth_Service_1.AuthService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map