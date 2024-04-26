import { flight } from "../aeroplane/flight";
import { employee } from "./employee";
import { Gender } from "./gender";
import { pilot } from "./pilot";



export class coPilot extends employee{
    private pilot: pilot ;
    private flights:flight[] = []; 
    constructor(salary:string, name:string, age:number, gender:Gender){
        super(salary, name, age, gender);
    }
}
