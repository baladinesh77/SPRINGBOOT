"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by sonusathyadas on 13-03-2017.
 */
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.noSpecialChars = function (ctrl) {
        if (ctrl.value.indexOf(".") == -1 && ctrl.value.indexOf(" ") == -1) {
            return null;
        }
        else {
            return {
                nospecialchars: {
                    valid: false
                }
            };
        }
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=customvalidators.js.map