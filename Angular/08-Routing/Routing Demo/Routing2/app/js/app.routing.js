"use strict";
var router_1 = require('@angular/router');
var product_list_component_1 = require("./product-list.component");
var product_add_component_1 = require("./product-add.component");
var home_component_1 = require("./home.component");
var product_detail_component_1 = require("./product-detail.component");
var product_overview_component_1 = require("./product-overview.component");
var specs_component_1 = require("./specs.component");
var product_info_component_1 = require("./product-info.component");
var appRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'list',
        component: product_list_component_1.ProductListComponent
    },
    {
        path: 'add',
        component: product_add_component_1.ProductAddComponent
    },
    {
        path: 'detail/:id',
        component: product_detail_component_1.ProductDetailComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: product_overview_component_1.ProductOverviewComponent },
            { path: 'specs', component: specs_component_1.ProductSpecComponent }
        ]
    },
    {
        path: 'info',
        component: product_info_component_1.ProductInfoComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map