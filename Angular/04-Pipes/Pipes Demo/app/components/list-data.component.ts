
import {Component} from '@angular/core';

@Component({
    selector:'list-data',
    templateUrl:'app/views/list-data.html'
})
export class ListDataComponent {
    
    private data:any[]=[
        {name:"Sonu",location:"Mumbai", designation:"Technical Consultant"},
        {name:"Ajay",location:"Pune", designation:"Technical Trainer"},
        {name:"Ganesh",location:"Mumbai", designation:"Marketing Manager"},
        {name:"Binu",location:"Bengaluru", designation:"HR Executive"}
    ];
    private today=new Date();

}