
import { flight } from "../aeroplane/Flight";
import { passenger } from "../persons/Passenger";

export class ticket{
    private passenger: passenger;
    private flight: flight;
    constructor (private price:string , private classType:string ){
       this.price = price 
       this.classType = classType
    }
}