import { person } from "./Person";
import { Gender } from "./Gender";
import { bagGage } from "../baggage/Baggage";
import { booking } from "../booking/Booking";
import { bookingFlight } from "../booking/BookingFlight";
import { meal } from "../food/Meal";
import { typeMeal } from "../food/Type";


export class passenger extends person{

    private bags: bagGage[] = [];
    private booking: booking;
    private bookingFlights: bookingFlight[] = [];


    constructor(name: string, gender: Gender, age: number, private chooseMeal?: typeMeal, private frequentFlyerNumber?: string,) {
        super(name, gender, age);
        this.chooseMeal = chooseMeal;
        this.frequentFlyerNumber = frequentFlyerNumber;
    }
    setBooking(booking: booking){
        this.booking = booking;
    }
    addBag(bags:bagGage[]){
        for (let bag of bags){
            this.bags.push(bag);
        }
    }
    addBookingFlight(bookings: bookingFlight[]){
        for(let booking of bookings){
            this.bookingFlights.push(booking);
        }
    }
    getBag(): bagGage[]{
        return this.bags;
    }
    getBooking(){
        return this.booking;
    }
}