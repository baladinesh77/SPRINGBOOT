"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const app_component_1 = require("./app.component");
const home_component_1 = require("./components/home.component");
const event_thumbnail_component_1 = require("./components/event-thumbnail.component");
const reactive_event_component_1 = require("./components/reactive-event.component");
const app_routes_1 = require("./app.routes");
const event_service_1 = require("./services/event.service");
const http_1 = require("@angular/http");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            app_routes_1.AppRoutes
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            event_thumbnail_component_1.EventThumbnailComponent,
            reactive_event_component_1.ReactiveRegisterEventComponent
        ],
        providers: [
            event_service_1.EventService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map