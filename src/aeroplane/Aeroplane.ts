import { seat } from "../seat/Seat";
import { flight } from "./Flight";

export class areoplane{
    private seats: seat[] = [] ;
    private flights: flight[] = [];
    constructor(private registerationNumber:number, private layout:string){
        this.registerationNumber = registerationNumber;
        this.layout = layout;
    }
    
}