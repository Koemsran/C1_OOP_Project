import { person } from "./person";


export class passenger extends person{

    constructor(name: string, gender:string, age: number, private bookingReference:string, private seatNumber:string){
        super(name, gender, age);
        this.bookingReference = bookingReference;
        this.seatNumber = seatNumber;
    }
}