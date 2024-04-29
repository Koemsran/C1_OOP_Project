import { dateTime } from "../address/Date";
import { bookingFlight } from "../booking/BookingFlight";
import { meal } from "../food/Meal";
import { chef } from "../persons/Chef";
import { coPilot } from "../persons/CoPilot";
import { pilot } from "../persons/Pilot";
import { airport } from "./Airport";
import { route } from "./Route";
import { gate } from "./Gate";


export class flight {

    private bookingFlight: bookingFlight[] = [];
    private route: route;
    private gates: gate[] = [];
    private dateTime: dateTime;
    private pilot: pilot;
    private co_pilot: coPilot;
    private chef: chef;
    private meals: meal[] = [];
    constructor(private flightNumber: string) {
        this.flightNumber = flightNumber

    }

    addBookingFlight(bookingFlight: bookingFlight[]) {
        for (let booking of bookingFlight) {
            this.bookingFlight.push(booking);
        }
    }
    setRoute(route: route) {
        this.route = route;
    }
    addGate(gates: gate[]) {
        for (let gate of gates) {
            this.gates.push(gate);

        }
    }
    setDate(date: dateTime) {
        this.dateTime = date;
    }
    getDate(): dateTime {
        return this.dateTime;
    }
    addMealFromBookingFlight() {
        for (let booking of this.bookingFlight) {
            for (let meal of booking.getMealsFromBookingFlight()) {
                this.meals.push(meal)
            }
        }

    }
    getMeals(): meal[] {

        return this.meals;

    }
    getFlightNumber() {
        return this.flightNumber;
    }
    getGates(): gate[] {
        return this.gates;
    }
}