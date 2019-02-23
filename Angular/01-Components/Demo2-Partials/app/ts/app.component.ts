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
    private clients:any;

    constructor(){
        this.name="Sonu Sathyadas";
        this.clients=[
            {
                name:'Cognizant',
                location:'Mumbai'
            },
            {
                name:'Wipro',
                location:'Bengaluru'
            },
            {
                name:'Godrej',
                location:'Mumbai'
            },
            {
                name:'CapGemini',
                location:'Chennai'
            }
        ];
    }
}
