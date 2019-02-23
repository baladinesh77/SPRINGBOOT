"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("../services/user.service");
require("rxjs/Rx");
var AyncValidators = (function () {
    function AyncValidators() {
    }
    AyncValidators.userExists = function (ctrl) {
        var userService = new user_service_1.UserService();
        return new Promise(function (resolve) {
            userService.userExists(ctrl.value)
                .subscribe(function (found) {
                if (found == true) {
                    console.log("found");
                    resolve({
                        'userexists': {
                            valid: false
                        }
                    });
                }
                else {
                    resolve(null);
                }
            }, function (err) { return resolve(null); });
        });
    };
    return AyncValidators;
}());
exports.AyncValidators = AyncValidators;
//# sourceMappingURL=asyncvalidators.js.map