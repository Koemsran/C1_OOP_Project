//Import file 
import { airline } from "./aeroplane/Airline";
import { flight } from "./aeroplane/Flight";
import { booking } from "./booking/Booking";
import { bookingFlight } from "./booking/BookingFlight";
import { bookingTrip } from "./booking/BookingTrip";
import { typeMeal } from "./food/type";
import { Gender } from "./persons/Gender";
import { employee } from "./persons/Employee";
import { passenger } from "./persons/Passenger";
import { coPilot } from "./persons/CoPilot";
import { pilot } from "./persons/Pilot";
import { dateTime } from "./address/Date";
import { chef } from "./persons/Chef";
import { bagGage } from "./baggage/Baggage";
import { gate } from "./aeroplane/Gate";
import { seat } from "./seat/Seat";
import { route } from "./aeroplane/Route";

// Airline
let airline1 = new airline('PP Airline', "A21");

// Passenger 
let passenger1 = new passenger('Koemsran',Gender.FEMALE, 20,  typeMeal.HALAL);
let passenger2 = new passenger('Sreyka', Gender.FEMALE, 21, typeMeal.HALAL);
let passenger3 = new passenger('Ryfin', Gender.FEMALE, 19, typeMeal.HALAL);

//Booking
let booking1 = new booking('C1');
let booking2 = new booking('C2');
let booking3 = new booking('C3');

//Employees
let emyployee1 = new employee(500, "Ra", 25, Gender.MALE);
let emyployee2 = new employee(1000, "Reach",30, Gender.FEMALE);
let emyployee3 = new employee(1500, "Rith", 35, Gender.MALE);
let emyployee4 = new employee(2000, "Rin", 40, Gender.FEMALE);

// Passenger booking
booking1.addPassenger(passenger1);
booking2.addPassenger(passenger2);
booking3.addPassenger(passenger3);

//Trip 
let trip1 = new bookingTrip();
let trip2 = new bookingTrip();
let trip3 = new bookingTrip();

//Flight
let flight1 = new flight('B1');
let flight2 = new flight('B2');

//Booking flight
let bookingFlight1 = new bookingFlight();
let bookingFlight2 = new bookingFlight();
let bookingFlight3 = new bookingFlight();

//Pilot and CoPilot
let pilot1 = new pilot(100,'Thina',22,Gender.MALE)
let co_pilot = new coPilot(100,'Seyha',20,Gender.MALE)

//Date time
let date1 = new dateTime('26/04/2024','7:30 AM');
let date2 = new dateTime('27/04/2024','6:00 PM');

// Chef
let chef1 = new chef(200, 'Vorn', 19, Gender.FEMALE);

//Baggage
let bag = new bagGage(7);

// Gate 
let gate1 = new gate("A1");
let gate2 = new gate("A2");
let gate3 = new gate("A3");
let gate4 = new gate("A4");
let gate5 = new gate("A5");

//Seat
let seat1 = new seat("E1");
let seat2 = new seat("E2");
let seat3 = new seat("E3");
let seat4 = new seat("E4");
let seat5 = new seat("E5");

//Route
let route1 = new route("Phnom Penh", "Siem Reap");
let route2 = new route("Siem Reap", "Phnom Penh");
let route3 = new route("Phnom Penh", "Bang Kork");

