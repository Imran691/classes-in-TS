class Car4 {
    constructor(color, location) {
        this.color = color;
        this.location = location;
    }
    color;
    location;
}
let myCar = new Car4("Silver", "Lahore");
// Definitely assigned properties
class Car5 {
    constructor(color, location) {
        this.color = color;
        this.location = location;
    }
    color;
    location;
    owner; // "!" mark asserts to TS that property will be assigned a value (other than undefined) before its 1st usage. And property does not have strict property initialization to it.
}
let car8 = new Car5("Red", "Lahore");
//Optioal properties
class Car6 {
    constructor(color, location, owner) {
        this.color = color;
        this.location = location;
        this.owner = owner;
    }
    color;
    location;
    owner; // "?" mark makes the property optional as in interfaces
}
let myCar0 = new Car6("Red", "Lahore");
// Read Only properties
// Once a value assigned to readonly property, it can not be reassigned
// Used for the properies that are never changed
class Car7 {
    constructor(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    color;
    location;
    vin; // it is done by adding keyword "readonly" before name of property
}
let myCar1 = new Car7("Silver", "Lahore", "1C");
export {};
//myCar1.vin = "2C"    // Error: Cannot assign to 'vin' because it is a read-only property.
