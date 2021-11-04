import Vehicle from "./vehicle.js"
import Car extends Vehicle from "./car.js"
import Truck from "./truck.js"
import Motorcycle from "./motorcycle.js"
import SUV from "./suv.js"

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