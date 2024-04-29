import { booking } from "../booking/Booking";
import { ReturnTicket } from "../booking/ReturnTicket";
import { employee } from "../persons/Employee";


export class airline {
    private employees: employee[] = [];
    private bookings: booking[] = []
    constructor(private name: string, private code: string) {
        this.name = name;
        this.code = code;
    }

    addBooking(books: booking[]) {
        for (let book of books) {
            this.bookings.push(book);
        }
    }

    addEmployee(employees: employee[]) {
        for (let employee of employees) {
            this.employees.push(employee);
        }
    }

    getTripDetails(referenceNumber: string) {
        for (let booking of this.bookings) {
            if (booking.getBookingReferenceNumber() == referenceNumber) {
                let passenger = booking.getPassenger(referenceNumber);
                let bag = passenger?.getBag();
                let flight = booking.getFlight();
                return {
                    passenger,
                    bag,
                    flight,
                }
            } else {
                return "Passenger not found"
            }

        }

    }
    getAllticketsReturn(){
        let tickets: number = 0;
        for( let book of this.bookings){
            if(book.getStatuse() == ReturnTicket.return){
                tickets+= 1
            }
        }
        return tickets; 

    }
    getAllSalaryEmployee():number{
        let totalSalary:number = 0;
        for(let employee of this.employees){
            totalSalary+= employee.getSalary()

        }
        return totalSalary;
    }
}

export { ReturnTicket };
