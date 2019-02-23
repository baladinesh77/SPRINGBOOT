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
var EventThumbnailComponent = (function () {
    function EventThumbnailComponent() {
        this.clickEvent = new core_1.EventEmitter();
    }
    EventThumbnailComponent.prototype.register = function () {
        this.clickEvent.emit(this.event);
    };
    EventThumbnailComponent.prototype.discountColor = function () {
        if (this.event.price < 200)
            return 'green';
        else
            return 'black';
    };
    return EventThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EventThumbnailComponent.prototype, "event", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EventThumbnailComponent.prototype, "clickEvent", void 0);
EventThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'event-thumbnail',
        templateUrl: 'app/views/event-thumbnail.html'
    })
], EventThumbnailComponent);
exports.EventThumbnailComponent = EventThumbnailComponent;
//# sourceMappingURL=event-thumbnail.component.js.map