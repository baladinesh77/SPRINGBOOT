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
var event_list_1 = require("../models/event-list");
var EventListComponent = (function () {
    function EventListComponent() {
        this.events = event_list_1.EventList;
        if (this.events.length == 0)
            this.status = "0";
        else if (this.events.length > 0 && this.events.length <= 4)
            this.status = "1";
        else
            this.status = "more";
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
    }),
    __metadata("design:paramtypes", [])
], EventListComponent);
exports.EventListComponent = EventListComponent;
//# sourceMappingURL=event-list.component.js.map