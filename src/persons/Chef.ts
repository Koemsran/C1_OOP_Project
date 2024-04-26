import { flight } from "../aeroplane/Flight";
import { employee } from "./Employee";
import { Gender } from "./Gender";



export class chef extends employee {
    private fights: flight[] = [];
    constructor(salary: number, name: string, age: number, gender: Gender) {
        super(salary, name, age, gender);
    }
  
}