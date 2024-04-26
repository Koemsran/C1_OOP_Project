import { flight } from "../aeroplane/flight";
import { gate } from "../aeroplane/gate";
import { meal } from "../food/meal";
import { passenger } from "../persons/passenger";
import { bookingTrip } from "./bookingTrip";


export class bookingFlight {
    private passengers: passenger[] = [];
    private bookTrip: bookingTrip;
    private chooseMeal: meal[] = [];
    private flight: flight;
    private gate: gate;


}