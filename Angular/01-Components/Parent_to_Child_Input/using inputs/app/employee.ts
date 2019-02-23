
export class Employee{
    public id:number;
    public name:string;
    public email:string;
    public salary:number;

    constructor(id:number,name:string,email:string,salary:number){
        this.id=id;
        this.name=name;
        this.email=email;
        this.salary=salary;
    }
}