"use strict";
var product_list_component_1 = require("../components/product-list.component");
var product_add_component_1 = require("../components/product-add.component");
var router_1 = require("@angular/router");
var product_detail_component_1 = require("../components/product-detail.component");
var product_Info_component_1 = require("../components/product-Info.component");
var product_spec_component_1 = require("../components/product-spec.component");
var product_gallery_component_1 = require("../components/product-gallery.component");
var product_rating_component_1 = require("../components/product-rating.component");
var routes = [
    {
        path: 'home',
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
            {
                path: 'spec',
                component: product_spec_component_1.ProductSpecComponent
            },
            {
                path: 'gallery',
                component: product_gallery_component_1.ProductGalleryComponent
            },
            {
                path: '',
                redirectTo: 'spec',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'info',
        component: product_Info_component_1.ProductInfoComponent,
    },
    {
        path: 'rating/:id',
        component: product_rating_component_1.ProductRatingComponent,
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map