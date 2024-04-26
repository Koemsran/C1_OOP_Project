import { dateTime } from "../address/date";
import { bookingFlight } from "../booking/bookingFlight";
import { meal } from "../food/meal";
import { coPilot } from "../persons/CoPilot";
import { chef } from "../persons/chef";
import { pilot } from "../persons/pilot";
import { airport } from "./airport";
import { gate } from "./gate";
import { route } from "./route";


export class flight{
    private bookingFlight: bookingFlight[] = [];
    private route: route;
    private gates: gate[] = [];
    private dateTime: dateTime;
    private pilot: pilot;
    private co_pilot: coPilot;
    private chef: chef;
    private meals: meal[] = [];
    constructor(private number:string, private departureAirport:airport,
    private arrivalAirport:airport, private departureTime:string, private arrivalTime:string){
        this.number = number
        this.departureAirport = departureAirport
        this.arrivalAirport = arrivalAirport
        this.departureTime = departureTime
        this.arrivalTime  = arrivalTime
    }
}