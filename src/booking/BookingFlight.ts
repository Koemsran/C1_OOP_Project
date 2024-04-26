import { flight } from "../aeroplane/Flight";
import { gate } from "../aeroplane/Gate";
import { meal } from "../food/Meal";
import { passenger } from "../persons/Passenger";
import { bookingTrip } from "./BookingTrip";


export class bookingFlight {
    private passengers: passenger[] = [];
    private bookTrip: bookingTrip;
    private chooseMeal: meal[] = [];
    private flight: flight;
    private gate: gate;


}