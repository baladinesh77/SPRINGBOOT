import {Injectable} from '@angular/core';
import {Employee} from "./employee";
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeObservableService{

    constructor(private http:Http) {

    }

    public getData():Observable<Employee[]>{
        return this.http
            .get('app/data/employees.json')
            .map(resp=>resp.json())
            .catch (this.handleError);
    }

    private handleError(error:any){
        var errMsg=(error.message)?
            error.message:
            (error.status)?
                `${error.status} - ${error.statusText}`:
                'Server error';
        return Observable.throw(errMsg);
    }
}