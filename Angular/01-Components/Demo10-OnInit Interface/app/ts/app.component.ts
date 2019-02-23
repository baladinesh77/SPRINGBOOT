import { Component } from '@angular/core';
import {MyComponent} from "./my-component.component";

@Component({
    selector: 'my-app',
    template: `<h1>Angular Demo</h1>
                <my-component></my-component>`,
    directives:[MyComponent]

})
export class AppComponent { }


