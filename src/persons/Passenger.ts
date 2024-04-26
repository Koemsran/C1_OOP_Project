import { person } from "./Person";
import { Gender } from "./Gender";
import { bagGage } from "../baggage/Baggage";
import { booking } from "../booking/Booking";
import { bookingFlight } from "../booking/BookingFlight";
import { meal } from "../food/Meal";
import { typeMeal } from "../food/Type";


export class passenger extends person{

    private bages: bagGage[] = [];
    private booking: booking;
    private bookingFlights: bookingFlight[] = [];


    constructor(name: string, gender: Gender, age: number, private chooseMeal?: typeMeal, private frequentFlyerNumber?: string,) {
        super(name, gender, age);
        this.chooseMeal = chooseMeal;
        this.frequentFlyerNumber = frequentFlyerNumber;
    }
}