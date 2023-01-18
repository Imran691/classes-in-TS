// in TS we can create a new class by extending an existing class
// we can inherent all properties of an existing class to new class
class Car9 {
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
            console.log("Engine starting.");
        }
        else {
            console.log("Engine shutting down.");
        }
    }
}
class Mercedes extends Car9 {
    alloyWheels = true;
    adjustableSuspension = true;
}
let myCar = new Mercedes("Silver", "California", "1A"); // consructor function of "Car" is being called here
console.log(myCar);
myCar.power(true);
export {};
