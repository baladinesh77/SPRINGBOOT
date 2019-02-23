"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ListDataComponent = class ListDataComponent {
    constructor() {
        this.data = [
            { name: "Sonu", location: "Mumbai", designation: "Technical Consultant" },
            { name: "Ajay", location: "Pune", designation: "Technical Trainer" },
            { name: "Ganesh", location: "Mumbai", designation: "Marketing Manager" },
            { name: "Binu", location: "Bengaluru", designation: "HR Executive" }
        ];
        this.today = new Date();
    }
};
ListDataComponent = __decorate([
    core_1.Component({
        selector: 'list-data',
        templateUrl: 'app/views/list-data.html'
    })
], ListDataComponent);
exports.ListDataComponent = ListDataComponent;
//# sourceMappingURL=list-data.component.js.map