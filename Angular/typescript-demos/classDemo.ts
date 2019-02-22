class Person{
    firstName: string;
    lastName: string;
    phone: number;
    constructor(fn:string, ln:string, ph:number){
        this.lastName=ln;
        this.firstName=fn;
        this.phone=ph;
    }
}

let p : Person;
p = new Person("Rahul","Dravid",68768768);
