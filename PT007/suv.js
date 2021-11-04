import Car from "./car.js";
export default class SUV extends Car {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car, subtype SUV";
    }

    transportSUV() {
        console.log(`I am driving my SUV`)
    }
    static aboutdisplayinfo () {
        console.log("Static override");
    }
}