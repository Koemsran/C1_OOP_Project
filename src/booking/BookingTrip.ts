import { bagGage } from "../baggage/Baggage";
import { passenger } from "../persons/Passenger";
import { bookingFlight } from "./BookingFlight";

export class bookingTrip {
    private passengers: passenger[] = [];
    private bookFlight: bookingFlight[] = [];
    
    addPassenger(passengers: passenger[]){
        for(let passenger of passengers){
            this.passengers.push(passenger);
        }

    }
    addBookingFlight(booking: bookingFlight){
        this.bookFlight.push(booking)
    }
    

}
