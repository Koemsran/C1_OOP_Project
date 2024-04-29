import { typeMeal } from "./Type";

export class meal{
    
    constructor (private type:typeMeal, private quantity:number){
        this.type = type
        this.quantity = quantity
    }
    getType(){
        return this.type;
    }
}
