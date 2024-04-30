import { passenger } from "../persons/Passenger";
import { seat } from "../seat/Seat";
import { flight } from "./Flight";

export class areoplane{
    private seats: seat[] = [] ;
    private flights: flight[] = [];
    private passengers: passenger[] = [];
    constructor(private registerationNumber:string){
        this.registerationNumber = registerationNumber;
    }
    addPassenger(passenger: passenger){
        this.passengers.push(passenger)
    }
    getPassengerBoarded(){
        return this.passengers.length;

    }
    addSeat(seats: seat[]){
        for(let seat of seats){
            this.seats.push(seat)
        }
        
    }
    setSeatStatusByBookingFlight(seats: seat[]) {
        for (const airplaneSeat of this.seats) {
            for (const bookingSeat of seats) {
                if (airplaneSeat.getSeatNumber() === bookingSeat.getSeatNumber()) {
                    airplaneSeat.alvailableSeat();
                    
                }
            }
        }
    }
    getSeatAlvailable(){
        let seatAlvailNumber = [];
        for ( let seat of this.seats){
            if(seat.getAlvailable() == true){
                seatAlvailNumber.push(seat.getSeatNumber());
            }
        }
        return seatAlvailNumber;
    }

}