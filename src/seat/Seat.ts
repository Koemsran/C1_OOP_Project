export class seat{
    private alvailable: boolean | undefined = true
    constructor(private seatNumber: string){
        
    }
    alvailableSeat(){
        this.alvailable = false
    }
    getSeatNumber(){
        return this.seatNumber;
    }
    getAlvailable(){
        return this.alvailable;
    }
}