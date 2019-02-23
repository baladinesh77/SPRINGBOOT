"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./components/login.component");
var home_component_1 = require("./components/home.component");
var about_component_1 = require("./components/about.component");
var auth_guard_1 = require("./services/auth.guard");
var routes = [
    {
        path: "login",
        component: login_component_1.LoginComponent
    },
    {
        path: "home",
        component: home_component_1.HomeComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: "about",
        component: about_component_1.AboutComponent
    },
    {
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
    }
];
exports.AppRoutes = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map