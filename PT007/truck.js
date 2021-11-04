import Vehicle from "./vehicle.js";
export default class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "truck";
    }

    transportContainer() {
        console.log(`I am starting transporting heavy container`)
    }
    envmessage () {
        console.log("Use more fuel efficent trucks and plan more efficintly your routes - it will help environmen, but it will also help save you your hard earned money");
    }
}