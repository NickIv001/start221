export default class Motorcycle extends Vehicle {
    constructor(carModel, carYear, maxSpeed, biketype) {
        super(carModel, carYear, maxSpeed);
        this.biketype = biketype;
        this.type = "Motorcycle";
    }

    transportmyself() {
        console.log(`I am driving my motorcycle`)
    }
    classicorsportbiketype () {
        console.log(`Type: ${this.biketype}`)
    }
}