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

    addMeal(meals: meal[]){
        for(let meal of meals){
            this.chooseMeal?.push(meal);
        }
    }
    addPassenger(passengers: passenger[]){
        for(let passenger of passengers){
            this.passengers.push(passenger)
        }
    }
    getMealsFromBookingFlight(): meal[] {
        return this.chooseMeal;
       
    }
    setFlight(flight: flight) {
        this.flight = flight;
    }
    
    getGate() {
        return this.gate;
    }
    
    
}