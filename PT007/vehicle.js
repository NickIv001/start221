export default class Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
    }
    displayinfo () {
        console.log(`Name: ${this.model}:
        Year: ${this.year};
        Max Speed: ${this.maxSpeed};
        Type: ${this.type};`)
    }
    static aboutdisplayinfo () {
        console.log("if displayinfo is called for vehicle class then type will be undefined, well, because it is undefined at this stage");
    }
    envmessage () {
        console.log("Consider environmental impact of driving - use eco frendlier vehicle and try to drive more efficiently");
    }
}