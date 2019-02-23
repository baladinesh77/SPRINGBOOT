"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EventListComponent = (function () {
    function EventListComponent() {
        this.event = {
            name: 'Angular2 Fundamentals',
            location: 'Mumbai',
            price: 240.00,
            date: '12-Apr-2017',
            time: '9:30 am'
        };
    }
    EventListComponent.prototype.clickEventhandled = function (data) {
        console.log(data);
    };
    return EventListComponent;
}());
EventListComponent = __decorate([
    core_1.Component({
        selector: 'event-list',
        templateUrl: 'app/views/event-list.html'
    })
], EventListComponent);
exports.EventListComponent = EventListComponent;
//# sourceMappingURL=event-list.component.js.map