//Import file 
import { ReturnTicket, airline } from "./aeroplane/Airline";
import { flight } from "./aeroplane/Flight";
import { booking } from "./booking/Booking";
import { bookingFlight } from "./booking/BookingFlight";
import { bookingTrip } from "./booking/BookingTrip";
import { typeMeal } from "./food/Type";
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
import { meal } from "./food/Meal";
import { boardingPass } from "./booking/Boarding";
import { address } from "./address/Address";
import { areoplane } from "./aeroplane/Aeroplane";
import { airport } from "./aeroplane/Airport";

// Airline
let airLine = new airline('PP Airline', "A21");
let plane = new areoplane("ABC123");

// Passenger 
let passenger1 = new passenger('Koemsran', Gender.FEMALE, 20, typeMeal.HALAL);
let passenger2 = new passenger('Sreyka', Gender.FEMALE, 21, typeMeal.HALAL);
let passenger3 = new passenger('Ryfin', Gender.FEMALE, 19, typeMeal.HALAL);

//Booking trip 
let trip1 = new bookingTrip();
let trip2 = new bookingTrip();
let trip3 = new bookingTrip();

//Booking flight
let bookingFlight1 = new bookingFlight();
let bookingFlight2 = new bookingFlight();
let bookingFlight3 = new bookingFlight();

//Flight
let flight1 = new flight('B1');
let flight2 = new flight('B2');
let flight3 = new flight('B3');

//Pilot and CoPilot
let pilot1 = new pilot(100, 'Thina', 22, Gender.MALE)
let co_pilot = new coPilot(100, 'Seyha', 20, Gender.MALE)

//Date time
let date1 = new dateTime('26/04/2024', '7:30 AM');
let date2 = new dateTime('27/04/2024', '6:00 PM');

// Chef
let chef1 = new chef(200, 'Vorn', 19, Gender.FEMALE);

// Meal
let meal1 = new meal(typeMeal.VEGENTARIAN, 10)
let meal2 = new meal(typeMeal.HALAL, 13)
let meal3 = new meal(typeMeal.HALAL, 13)

//Baggage
let bag1 = new bagGage(7);
let bag2 = new bagGage(3);
let bag3 = new bagGage(2);

// Add passenger's baggages
passenger1.addBag([bag1, bag3]);
passenger2.addBag([bag2, bag3]);
passenger3.addBag([bag1, bag2]);

// Adress 
let PP = new address("Phnom Penh", "Cambodia");
let SR = new address("Siem Reap", "Cambodia")
let BK = new address("Bang Kork", "Tailand")

//Route
let route1 = new route(PP, SR);
let route2 = new route(SR, PP);
let route3 = new route(PP, BK);

// Add to flight
flight1.setRoute(route1);
flight1.setDate(date1)

flight2.setRoute(route1);
flight2.setDate(date2)

flight3.setRoute(route1);
flight3.setDate(date1)

//Booking
let booking1 = new booking('C1', ReturnTicket.return);
let booking2 = new booking('C2', ReturnTicket.cancel);
let booking3 = new booking('C3', ReturnTicket.return);

// Passenger booking
booking1.addPassenger(passenger1);
booking2.addPassenger(passenger2);
booking3.addPassenger(passenger3);

// Add booking trip to booking 
booking1.addBookingTrip([trip1]);
booking1.addFlight(flight1);

booking2.addBookingTrip([trip2]);
booking2.addFlight(flight1)

booking3.addBookingTrip([trip3]);
booking3.addFlight(flight1)

//Add booking flight to passenger 
passenger1.addBookingFlight([bookingFlight1]);
passenger2.addBookingFlight([bookingFlight2, bookingFlight3]);

// ================> STORY 1: Get full detail passenger's trip <================= 
airLine.addBooking([booking1, booking2, booking3]);

passenger1.setBooking(booking1);
passenger2.setBooking(booking2);
passenger3.setBooking(booking3);

let passengerTrip = airLine.getTripDetails("C1");
// console.log(passengerTrip)

// =============> STORY 2: How many passengers have returned ticket <===================
trip1.addPassenger([passenger1,passenger2, passenger3]);
trip1.addBookingFlight(bookingFlight1);

let ticketRetuned = `There are ${airLine.getAllticketsReturn()} tickets that passengers have returned`;
// console.log(ticketRetuned)

// =============> STORY 3: How many flights each pilot has to join <===================
pilot1.addFlight([flight1,flight2, flight3]);

let numberOfPilotJoinFlights =`There are ${pilot1.getFlightsForDate(date1)} flights that I has to join` ;
// console.log(numberOfPilotJoinFlights)

// =============> STORY 4:  How many of each meal type I need to prepare <===================
bookingFlight1.addMeal([meal1, meal2]);
flight1.addBookingFlight([bookingFlight1, bookingFlight2]);
flight1.addMealFromBookingFlight();
chef1.addFlight([flight1]);

let mealToPrepare = chef1.getMeals();
// console.log(mealToPrepare)

// =============> STORY 5:  Get all salary from all employees <===================

//Employees
let emyployee1 = new employee(500, "Ra", 25, Gender.MALE);
let emyployee2 = new employee(1000, "Reach", 30, Gender.FEMALE);
let emyployee3 = new employee(1500, "Rith", 35, Gender.MALE);

airLine.addEmployee([emyployee1, emyployee2, emyployee3]);
let salaries = `${airLine.getAllSalaryEmployee()}$`;
// console.log(salaries)

// =============> STORY 6: Passenger want to know which gate my plane is waiting at <===================
//Seat
let seat1 = new seat("E1");
let seat2 = new seat("E2",);
let seat3 = new seat("E3");
let seat4 = new seat("E4");
let seat5 = new seat("E5");

// Gate 
let gate1 = new gate("A1");
let gate2 = new gate("A2");
let gate3 = new gate("A3");

let boarding1 = new boardingPass(plane);
let boarding2 = new boardingPass(plane);

flight1.addGate([gate1, gate2, gate3])
boarding1.setFlight(flight1)
boarding1.setGate(gate1);

passenger1.addBoarding(boarding1);
let gatePassenger = `The gate number ${passenger1.getGateForPassenger()} that my plane is waiting at`;
// console.log(gatePassenger)

// =============> STORY 7: Manager want to know how many passengers stay in the plane  <===================

boarding1.addPassenger(passenger1)
boarding2.addPassenger(passenger2)

boarding1.scanBoardingPass();
boarding2.scanBoardingPass();

// Check if boarding has scaned it mean passenger has boarded in the plane 
let passengerBoarded = plane.getPassengerBoarded();
// console.log(passengerBoarded)

// =============> STORY 8: Manager want to know how many seats are available <===================

plane.addSeat([seat1, seat2, seat3, seat4, seat5])
bookingFlight1.addSeat([seat1, seat2, seat3])

plane.setSeatStatusByBookingFlight(bookingFlight1.getSeat())
let seatAlvailable = plane.getSeatAlvailable();
// console.log(seatAlvailable)




