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
var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value) {
        var temp = "";
        for (var i = 0; i < value.length; i++) {
            temp = value[i] + temp;
        }
        return temp;
    };
    ReversePipe = __decorate([
        core_1.Pipe({ name: 'reverse' }), 
        __metadata('design:paramtypes', [])
    ], ReversePipe);
    return ReversePipe;
}());
exports.ReversePipe = ReversePipe;
var StartsWithPipe = (function () {
    function StartsWithPipe() {
    }
    StartsWithPipe.prototype.transform = function (data, text, column) {
        if (text == undefined || text === '') {
            return data;
        }
        var temp = [];
        if (column === "name") {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var item = data_1[_i];
                if (item.name.startsWith(text)) {
                    temp.push(item);
                }
            }
        }
        else if (column === "mobile") {
            for (var _a = 0, data_2 = data; _a < data_2.length; _a++) {
                var item = data_2[_a];
                if (item.mobile.startsWith(text)) {
                    temp.push(item);
                }
            }
        }
        else {
            for (var _b = 0, data_3 = data; _b < data_3.length; _b++) {
                var item = data_3[_b];
                if (item.name.startsWith(text) || item.mobile.startsWith(text)) {
                    temp.push(item);
                }
            }
        }
        return temp;
    };
    StartsWithPipe = __decorate([
        core_1.Pipe({ name: 'startsWith' }), 
        __metadata('design:paramtypes', [])
    ], StartsWithPipe);
    return StartsWithPipe;
}());
exports.StartsWithPipe = StartsWithPipe;
//# sourceMappingURL=custom.pipe.js.map