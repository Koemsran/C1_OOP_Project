import { address } from "../address/Address";
import { flight } from "./Flight";

export class route {
    private flight: flight;
    constructor(private departure: address, private arrival: address) {
        this.departure = departure
        this.arrival = arrival
     }
}