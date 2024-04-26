import { passenger } from "../persons/passenger";



export class bagGage{
    private passenger:passenger;

    constructor (private weight:number){
        this.weight = weight
    }
}