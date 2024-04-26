import { passenger } from "../persons/Passenger";
import { bookingTrip } from "./BookingTrip";

export class booking {
    private passengers: passenger[] = [];
    private bookingTrips: bookingTrip[] = [];
    constructor(private bookingReferenceNumber: string) {
        this.bookingReferenceNumber = bookingReferenceNumber;
   
    }
    public addPassenger(passenger: passenger){
        this.passengers.push(passenger);
    }


}