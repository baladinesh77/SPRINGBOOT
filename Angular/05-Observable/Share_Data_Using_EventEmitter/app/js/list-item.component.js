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
var user_1 = require("./user");
var user_share_service_1 = require("./user-share.service");
var ListItemComponent = (function () {
    function ListItemComponent(_userService) {
        this._userService = _userService;
        this.user = new user_1.User();
    }
    ListItemComponent.prototype.ngOnInit = function () {
        /*this._userService
        .UserChangeEvent
        .subscribe(user => {
            this.user=user;
        });*/
        var _this = this;
        this._userService
            .getUser()
            .subscribe(function (user) { _this.user = user; });
    };
    ListItemComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ListItemComponent = __decorate([
        core_1.Component({
            selector: 'list-item',
            templateUrl: 'app/partials/list-items.html'
        }), 
        __metadata('design:paramtypes', [user_share_service_1.UserShareService])
    ], ListItemComponent);
    return ListItemComponent;
}());
exports.ListItemComponent = ListItemComponent;
//# sourceMappingURL=list-item.component.js.map