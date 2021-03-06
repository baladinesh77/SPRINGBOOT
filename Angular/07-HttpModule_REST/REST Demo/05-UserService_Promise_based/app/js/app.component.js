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
var User_service_1 = require("./User.service");
var User_1 = require("./User");
var AppComponent = (function () {
    function AppComponent(_userService) {
        this._userService = _userService;
        this.user = new User_1.User();
    }
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user);
        this._userService
            .addUser(this.user)
            .then(function (user) { return _this.response = JSON.stringify(user); }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.onGetUser = function () {
        var _this = this;
        this._userService
            .getUser()
            .then(function (user) { return _this.response = JSON.stringify(user); }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/partials/app.html'
        }), 
        __metadata('design:paramtypes', [User_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map