const username:string = "fpapa";
const sum = (a:number,b:number)=>{
    return a+b;
}
sum(1,2);

class Person{
    /*age:number;
    lastName:string;*/
    constructor(public age:number, public lastName:string){
        /*this.age=age;
        this.lastName=lastName;*/
    }
}

const fredy = new Person(37,"Papa");
fredy.age;