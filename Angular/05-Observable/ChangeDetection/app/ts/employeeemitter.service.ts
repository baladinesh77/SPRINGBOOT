
import {Injectable, EventEmitter, Output} from '@angular/core';
import {Employee} from "./employee";
import {Http} from "@angular/http";


@Injectable()
export class EmployeeEmitterService{

    @Output()
    private emitter:EventEmitter<Employee>;

    public getEmployee():EventEmitter<Employee>{
        return this.emitter;
    }

    public setEmployee(employee:Employee){
        this.emitter.emit(employee);
    }
}