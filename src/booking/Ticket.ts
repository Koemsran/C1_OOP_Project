
import { flight } from "../aeroplane/flight";
import { passenger } from "../persons/passenger";

export class ticket{
    private passenger: passenger;
    private flight: flight;
    constructor (private price:string , private classType:string ){
       this.price = price 
       this.classType = classType
    }
}