function add(x:number ,y:number):number{
    return x+y;
}

function buildName(firstName: string,
            lastName?:string):string
{
    if(lastName){
        return '${firstName} ${lastName}';
    }
    return firstName;
}

console.log('Name is '+buildName('mahendra'));
console.log('Name is '+
            buildName('Mahendra','Shinde'));
            buildName();