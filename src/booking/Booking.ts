import { flight } from "../aeroplane/Flight";
import { passenger } from "../persons/Passenger";
import { bookingTrip } from "./BookingTrip";

export class booking {
    private passengers: passenger[] = [];
    private flights: flight[] = [];
    private bookingTrips: bookingTrip[] = [];
    constructor(private bookingReferenceNumber: string, private status:string ) {
        this.bookingReferenceNumber = bookingReferenceNumber;
   
    }
    addPassenger(passenger: passenger){
        this.passengers.push(passenger);
    }
    
    addBookingTrip(trips: bookingTrip[]){
        for (let trip of trips){
            this.bookingTrips.push(trip)
        }
    }
    addFlight(flight: flight){
        this.flights.push(flight);
    }
    getPassenger(referenceNumber:string){
        for(let passenger of this.passengers){
            if(passenger.getBooking().getBookingReferenceNumber() == referenceNumber){
                return passenger;
            }
            else{
                return undefined;
            }
        }
        
        
    }
    getBookingReferenceNumber(){
        return this.bookingReferenceNumber;
    }
    getFlight(){
        return this.flights;
    }
    getStatuse(){
        return this.status;
    }
   


}