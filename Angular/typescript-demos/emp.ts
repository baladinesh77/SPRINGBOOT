export class Employee{
    firstName: string;
    lastName: string;
    constructor(fn:string, ln:string){
        this.firstName=fn;
        this.lastName=ln;
    }
    show = function(){
        console.log(this.firstName+" "+this.lastName);
    }
}