import { person } from "./Person";
import { Gender } from "./Gender";
import { bagGage } from "../baggage/Baggage";
import { booking } from "../booking/Booking";
import { bookingFlight } from "../booking/BookingFlight";
import { meal } from "../food/Meal";
import { typeMeal } from "../food/Type";
import { boardingPass } from "../booking/Boarding";
import { gate } from "../aeroplane/Gate";


export class passenger extends person {

    private bags: bagGage[] = [];
    private booking: booking;
    private bookingFlights: bookingFlight[] = [];
    private boardingPass: boardingPass[] = [];
    constructor(name: string, gender: Gender, age: number, private chooseMeal?: typeMeal, private frequentFlyerNumber?: string,) {
        super(name, gender, age);
        this.chooseMeal = chooseMeal;
        this.frequentFlyerNumber = frequentFlyerNumber;
    }
    setBooking(booking: booking) {
        this.booking = booking;
    }
    addBag(bags: bagGage[]) {
        for (let bag of bags) {
            this.bags.push(bag);
        }
    }
    addBookingFlight(bookings: bookingFlight[]) {
        for (let booking of bookings) {
            this.bookingFlights.push(booking);
        }
    }
    getBag(): bagGage[] {
        return this.bags;
    }
    getBooking() {
        return this.booking;
    }
    addBoarding(boarding: boardingPass) {
        this.boardingPass.push(boarding);
    }
    getGateForPassenger(): string | undefined {
        let Gate: string | undefined = undefined
        for (let flight of this.boardingPass) {
            for (let gate of flight.getAFlight().getGates()) {
                if (flight.getGate() == gate) {
                    Gate = gate.getGateNumber()
                }

            }
        }
        return Gate;
    }
    
    
}