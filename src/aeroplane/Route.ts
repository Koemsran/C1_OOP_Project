import { flight } from "./Flight";

export class route {
    private flight: flight;
    constructor(private departure: string, private arrival: string) {
        this.departure = departure
        this.arrival = arrival
     }
}