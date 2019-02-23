"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const home_component_1 = require("./components/home.component");
const reactive_event_component_1 = require("./components/reactive-event.component");
const routes = [
    {
        path: "",
        component: home_component_1.HomeComponent
    },
    {
        path: "addevent",
        component: reactive_event_component_1.ReactiveRegisterEventComponent
    }
];
exports.AppRoutes = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map