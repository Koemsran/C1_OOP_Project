
import { areoplane } from "../aeroplane/Aeroplane";
import { flight } from "../aeroplane/Flight";
import { gate } from "../aeroplane/Gate";
import { passenger } from "../persons/Passenger";
import { seat } from "../seat/Seat";

export class boardingPass {
    private flight: flight;
    private passenger: passenger;
    private seat: seat;
    private gate: gate | null = null;
    private isBoarded: boolean = false;
    constructor (private airplane: areoplane){}
    setGate(gate: gate) {
        this.gate = gate;
    }
    getGate(): gate | null {
        return this.gate;
    }
    setFlight(flight: flight) {
        this.flight = flight;
    }
    scanBoardingPass(): void {
        if (this.isBoardingCompleted()) {
            this.airplane.addPassenger(this.passenger);
            
        }

    }
    getAFlight(): flight {
        return this.flight;
    }
    addPassenger(passenger: passenger) {
        this.passenger = passenger;
    }

    isBoardingCompleted(): boolean {
        this.isBoarded = true;
        return this.isBoarded;
    }

}
