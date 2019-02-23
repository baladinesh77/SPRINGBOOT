
import { EventCollection } from "../models/event-collection";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Injectable } from "@angular/core";

@Injectable()
export class EventService{

    constructor(private http:Http){
        
    }

    public getEvents():Observable<any>{
        let url="http://localhost:52632/api/events";
      
        return this.http.get(url, { withCredentials: true })
            .map(resp=>resp.json())
            .catch(err=>{
                console.log("Error:" , err.statusText);
                return Observable.throw(err.statusText);
            })
    }

    public addEvent(event:any):Observable<any>{
        var body={
            Name:event.name,
            Price:event.price,
            Location:event.location,
            EventDate:event.date,
            EventTime:event.time
        };
        let url="http://localhost:50509/api/events";
        let headers=new Headers({"Content-Type":"application/json"});
        let options=new RequestOptions({headers:headers});
        
        return this.http.post(url, body,options)
            .map(resp=>resp.json())
            .catch(err=>Observable.throw(err.statusText));
    }
}