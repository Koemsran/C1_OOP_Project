import { typeMeal } from "./type";

export class meal{
    constructor (private type:typeMeal, private quantity:number){
        this.type = type
        this.quantity = quantity
    }
}
