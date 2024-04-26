import { flight } from "../aeroplane/flight";
import { employee } from "./employee";
import { Gender } from "./gender";



export class chef extends employee {
    private fights: flight[] = [];
    constructor(salary: string, name: string, age: number, gender: Gender) {
        super(salary, name, age, gender);
    }
  
}