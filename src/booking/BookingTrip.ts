import { bagGage } from "../baggage/baggage";
import { passenger } from "../persons/passenger";
import { bookingFlight } from "./bookingFlight";


export enum returnTicket {
    return = "reTurnTrip"
}
export class bookingTrip {
    private passengers: passenger[] = [];
    private bags: bagGage[] = [];
    private bookFlight: bookingFlight[] = [];
    private returnTicket: returnTicket[] = [];

}
