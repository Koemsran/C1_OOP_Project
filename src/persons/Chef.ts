import { flight } from "../aeroplane/Flight";
import { meal } from "../food/Meal";
import { employee } from "./Employee";
import { Gender } from "./Gender";



export class chef extends employee {
    private flights: flight[] = [];
    constructor(salary: number, name: string, age: number, gender: Gender) {
        super(salary, name, age, gender);
    }
    addFlight(flights: flight[]){
        for(let flight of flights){
            this.flights.push(flight)
        }
    }
    getMeals() {
        let allMeals:meal[] = [];
        for(let flight of this.flights){
            for(let meal of flight.getMeals()){
                allMeals.push(meal)
            }
        }
        return allMeals;
    }
}

  
