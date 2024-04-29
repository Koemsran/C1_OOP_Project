import { dateTime } from "../address/Date";
import { flight } from "../aeroplane/Flight";
import { gate } from "../aeroplane/Gate";
import { seat } from "../seat/Seat";

export class boardingPass{
    private seatNumber:seat;
    private flightNumber: flight;
    private departureTime: dateTime;
    private arrivalTime: dateTime;
    private gate: gate;
    
}