import { Component } from '@angular/core';
import { ActorServiceService} from './actor-service.service';
import { Actor} from './actor-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo1';
  actors:Actor[];
  private name:string;
  private clients:any;

  constructor(private actorService:ActorServiceService){
    this.name="Mahendra Shinde";
    this.clients=['Cognizant','Wipro','Godrej','CapGemini'];
    this.actors=actorService.getActors();
  }

  onClick(client){
    alert("You selected "  + client);
}

addClient(client){
  console.log("Adding new client:"+client);
    if(client.trim()!=""){
        this.clients.push(client);
    }
}
}
