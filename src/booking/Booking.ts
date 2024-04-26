import { passenger } from "../persons/passenger";
import { bookingTrip } from "./bookingTrip";

export class booking {
    private passengers: passenger[] = [];
    private bookingTrips: bookingTrip[] = [];
    constructor(private bookingReferenceNumber: string) {
        this.bookingReferenceNumber = bookingReferenceNumber;
   
    }


}