
import { dateTime } from "../address/Date";
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
    addFlight(flights: flight[]){
        for(let flight of flights){
            this.flights.push(flight);
        }
    }
    getFlightsForDate(date: dateTime): number {
        let flightsForDate = this.flights.filter(flight => flight.getDate() == date);
        return flightsForDate.length;
    }
}