import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public static API_URL="http://localhost:8080/";

  private http:HttpClient;

  constructor(httpClient:HttpClient) { 
    this.http=httpClient;
  }

  findCustomer(id:number){
    
    let headers:HttpHeaders = new HttpHeaders();
        headers.append('Authorization','Basic '
        +btoa("mahendra:abdc1234"));

    let options = {
      "headers": headers
    }  
    return this.http
      .get(CustomerService.API_URL
          +"customers/find-by-id/"
          +id,options);
  }
}
