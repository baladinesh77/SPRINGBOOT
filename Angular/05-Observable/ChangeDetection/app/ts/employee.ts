
export class Employee{
    private id:number;
    private name:string;
    private email:string;

    get Id():number{
        return this.id;
    }
    set Id(_id:number){
        this.id=_id;
    }

    get Name():string{
        return this.name;
    }
    set Name(_name:string){
        this.name=_name;
    }

    get Email():string{
        return this.email;
    }
    set Email(_email:string){
        this.email=_email;
    }
}