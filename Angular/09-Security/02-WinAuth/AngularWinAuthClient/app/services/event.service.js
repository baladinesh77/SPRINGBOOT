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
const http_1 = require("@angular/http");
const Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
const core_1 = require("@angular/core");
let EventService = class EventService {
    constructor(http) {
        this.http = http;
    }
    getEvents() {
        let url = "http://localhost:52632/api/events";
        let headers = new http_1.Headers({ "Content-Type": "application/json" });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(url, { withCredentials: true })
            .map(resp => resp.json())
            .catch(err => {
            console.log("Error:", err.statusText);
            return Observable_1.Observable.throw(err.statusText);
        });
    }
    addEvent(event) {
        var body = {
            Name: event.name,
            Price: event.price,
            Location: event.location,
            EventDate: event.date,
            EventTime: event.time
        };
        let url = "http://localhost:50509/api/events";
        let headers = new http_1.Headers({ "Content-Type": "application/json" });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map(resp => resp.json())
            .catch(err => Observable_1.Observable.throw(err.statusText));
    }
};
EventService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map