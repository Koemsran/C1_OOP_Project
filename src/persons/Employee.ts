import { person } from "./person";

export class employee extends person{

    private salary:string;
    constructor( salary:string, name:string, age:number, gender:string){
        super(name, gender, age);
        this.salary = salary;

    }
}