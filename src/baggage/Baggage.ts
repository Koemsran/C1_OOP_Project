import { passenger } from "../persons/Passenger";

export class bagGage{
    private passenger:passenger;

    constructor (private weight:number){
        this.weight = weight
    }
}