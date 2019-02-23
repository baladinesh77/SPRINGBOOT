
import{Routes,RouterModule} from "@angular/router";
import{HomeComponent} from "./components/home.component";
import {ReactiveRegisterEventComponent} from "./components/reactive-event.component";

const routes:Routes=[
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"addevent",
        component:ReactiveRegisterEventComponent
    }
];

export const AppRoutes=RouterModule.forRoot(routes);