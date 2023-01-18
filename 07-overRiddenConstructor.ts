// previously we did not create a constructor in "Mercedes" class
// we will do that now

class Car10 {
  constructor(color: string, location: string, vin: string) {
    this.color = color;
    this.location = location;
    this.vin = vin;
  }
  color: string;
  location: string;
  vin: string;
  power(state: boolean) {
    if (state === true) {
      console.log("Car is starying.");
    } else {
      console.log("Car is turning off.");
    }
  }
}

class Mercedes extends Car10 {     // "Mercedes" is extension of "Car"; adds all properties of "Car" to "Mercedes"
  constructor(                      // to add extra properties in "Mercedes"
    color: string,
    location: string,
    vin: string,
    alloyWheels: boolean
  ) {
    super(color, location, vin); // calling constructor of parent class "Car"
    this.alloyWheels = alloyWheels;
  }
  alloyWheels: boolean;
  adjustableSuspension = true; // provided by default
}

let myCar = new Mercedes("Silver", "California", "1A", true);
