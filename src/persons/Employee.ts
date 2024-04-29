import { person } from "./Person";

export class employee extends person{

    private salary:number;
    constructor( salary:number, name:string, age:number, gender:string){
        super(name, gender, age);
        this.salary = salary;

    }

    getSalary():number{
        return this.salary;
    }
}