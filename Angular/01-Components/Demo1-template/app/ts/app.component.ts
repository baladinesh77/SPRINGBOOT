import {Component} from '@angular/core'
@Component({
    selector: 'my-app',
    /*template:`
    <div class="myContent">
    <h1>{{name}}</h1>
    <p>Some description</p>
    </div>`*/
    templateUrl:'app/partials/app.html'
})

export class AppComponent {
    private name:string;
    private clients:string[];

    constructor(){
        this.name="Sonu Sathyadas";
        this.clients=['Cognizant','Wipro','Hexaware','CapGemini','Godrej'];
    }
}
