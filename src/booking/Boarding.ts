
import { flight } from "../aeroplane/Flight";
import { gate } from "../aeroplane/Gate";
import { seat } from "../seat/Seat";

export class boardingPass {
    private flight: flight;
    private seat: seat;
    private gate: gate | null = null;
    private isBoarded: boolean = false;

    setGate(gate: gate) {
        this.gate = gate;
    }
    getGate(): gate | null {
        return this.gate;
    }
    setFlight(flight: flight){
        this.flight = flight;
    }

    isBoardingCompleted(): boolean {
        return this.isBoarded;
    }

    scanBoardingPass(): void {
        if (this.gate) {
            this.isBoarded = true;
        } 
    }
    
    getAFlight(): flight {
        return this.flight;
    }
}
