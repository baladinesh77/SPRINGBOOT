"use strict";
var Employee = (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "Id", {
        get: function () {
            return this.id;
        },
        set: function (_id) {
            this.id = _id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (_name) {
            this.name = _name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "Email", {
        get: function () {
            return this.email;
        },
        set: function (_email) {
            this.email = _email;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map