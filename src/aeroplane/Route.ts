import { flight } from "./flight";

export class route {
    private flight: flight;
    constructor(private departure: string, private arrival: string) {
        this.departure = departure
        this.arrival = arrival
     }
}