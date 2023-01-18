
class Car4{
    constructor(color: string, location: string){
        this.color = color;
        this.location = location;
    }
    color: string;
    location: string;
    //owner: string;     // Error= Property 'owner' has no initializer and is not definitely assigned in the constructor
}

let myCar = new Car4("Silver", "Lahore");

// Definitely assigned properties
class Car5{
    constructor(color: string, location: string){
        this.color = color;
        this.location = location;
    }
    color: string;
    location: string;
    owner!: string;   // "!" mark asserts to TS that property will be assigned a value (other than undefined) before its 1st usage. And property does not have strict property initialization to it.
}

let car8 = new Car5("Red", "Lahore")

//Optioal properties
class Car6{
    constructor(color: string, location: string, owner?: string){
        this.color = color;
        this.location = location;
        this.owner = owner;
    }
    color: string;
    location: string;
    owner?: string;     // "?" mark makes the property optional as in interfaces
} 
let myCar0 = new Car6("Red", "Lahore")

// Read Only properties
// Once a value assigned to readonly property, it can not be reassigned
// Used for the properies that are never changed
class Car7{
    constructor(color: string, location: string, vin: string){
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    color: string;
    location: string;
    readonly vin: string;     // it is done by adding keyword "readonly" before name of property
}

let myCar1 = new Car7("Silver", "Lahore", "1C")
//myCar1.vin = "2C"    // Error: Cannot assign to 'vin' because it is a read-only property.