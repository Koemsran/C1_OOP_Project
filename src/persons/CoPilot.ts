import { flight } from "../aeroplane/Flight";
import { employee } from "./Employee";
import { Gender } from "./Gender";
import { pilot } from "./Pilot";



export class coPilot extends employee{
    private pilot: pilot ;
    private flights:flight[] = []; 
    constructor(salary:number, name:string, age:number, gender:Gender){
        super(salary, name, age, gender);
    }
}
