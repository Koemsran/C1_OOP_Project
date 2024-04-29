export class gate{
    constructor (private gateNumber:string){
        this.gateNumber = gateNumber;
    }
    getGateNumber(){
        return this.gateNumber;
    }
}