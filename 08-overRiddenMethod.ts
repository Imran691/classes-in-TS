// if we need to update methods in Child class
// we have to over ride the methods of Parent in Child
// "power" method in parent class returns generic response
// we can create specialized method in our derived class "Mercedes" by over riding the method
// in "power" method if we use "return" instead of "console.log" it will consider the returned string as literal type and show error
// to remove that error we will have to assign the return type of method as "string" in line # 17 & 33.

class Car11 {
    constructor(color: string, location: string, vin: string){
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    color: string;
    location: string;
    vin: string;
    power(state: boolean): string {
        if(state === true){
            return "Car is starting.";
        } else {
            return "Car turning off.";
        }
    }
}

class Mercedes extends Car11{
    constructor(color: string, location: string, vin: string, alloyWheels: boolean){
        super(color, location, vin)
        this.alloyWheels = alloyWheels;
    }
    alloyWheels: boolean;
    adjustableSuspension = true;
    power(state: boolean): string{
        if(state === true){
            return "Mercedes car is starting.";
        } else {
            return "Mercedes car turning off.";
        }
    }
}

let myCar = new Mercedes("Silver", "California", "1A", true);