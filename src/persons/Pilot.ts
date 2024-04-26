
import { flight } from "../aeroplane/Flight";
import { coPilot } from "./CoPilot";
import { employee } from "./Employee";
import { Gender } from "./Gender";

export class pilot extends employee{
    private coPilot:coPilot[];
    private flights:flight[] = [] ;
    constructor(salary:number, name:string, age:number, gender:Gender){
        super(salary, name, age, gender);
    }
}