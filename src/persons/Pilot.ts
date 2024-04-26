
import { flight } from "../aeroplane/flight";
import { coPilot } from "./CoPilot";
import { employee } from "./employee";
import { Gender } from "./gender";

export class pilot extends employee{
    private coPilot:coPilot[];
    private flights:flight[] = [] ;
    constructor(salary:string, name:string, age:number, gender:Gender){
        super(salary, name, age, gender);
    }
}