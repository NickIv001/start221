//PT007

//1.Replicate code from slide 11, create instances of car and truck. Try to call different methods for both, investigate output using console.log().
//2.Add static method to one class, try to call it and investigate output.
//3.Call method of fathers class.
//4.Override method of fatherвЂ™s class.
//5.Move classes to separate files and import them into the app using import/export.

class Vehicle {
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

class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }

    transportPeople() {
        console.log(`I am starting transporting passengers`)
    }
}

class Truck extends Vehicle {
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

class Motorcycle extends Vehicle {
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

class SUV extends Car {
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

let electiricvehicle = new Vehicle("Some el. vehicle", 2017, 80);
electiricvehicle.displayinfo();

let tesla3 = new Car("Tesla model 3", 2020, 210);
tesla3.displayinfo();
tesla3.transportPeople();

let volvotruck = new Truck("Volvo model", 2019, 140);
volvotruck.displayinfo();
volvotruck.transportContainer();

let HarleyD = new Motorcycle("Harley Davidson Classic", 1980, 110, 'Classis');
HarleyD.displayinfo();
HarleyD.classicorsportbiketype();
HarleyD.transportmyself();

let SomeSUV = new SUV("Some SUV", 1980, 110);
SomeSUV.displayinfo();
SomeSUV.transportPeople();
SomeSUV.transportSUV();
//SomeSUV.transportmyself(); //should give error
Vehicle.aboutdisplayinfo ();
//electiricvehicle.aboutdisplayinfo (); //should give error
//SomeSUV.aboutdisplayinfo (); //should give error
SUV.aboutdisplayinfo (); // should be overriden
electiricvehicle.envmessage();
tesla3.envmessage();
volvotruck.envmessage(); // should be overriden