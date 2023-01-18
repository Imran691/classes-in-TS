// previously we did not create a constructor in "Mercedes" class
// we will do that now
class Car10 {
    constructor(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    color;
    location;
    vin;
    power(state) {
        if (state === true) {
            console.log("Car is starying.");
        }
        else {
            console.log("Car is turning off.");
        }
    }
}
class Mercedes extends Car10 {
    constructor(// to add extra properties in "Mercedes"
    color, location, vin, alloyWheels) {
        super(color, location, vin); // calling constructor of parent class "Car"
        this.alloyWheels = alloyWheels;
    }
    alloyWheels;
    adjustableSuspension = true; // provided by default
}
let myCar = new Mercedes("Silver", "California", "1A", true);
export {};
