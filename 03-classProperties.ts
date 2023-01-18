// only properties available in class can be assigned to the objects being created by using the calss.

class Car3 {
    constructor(color: string, location: string){
        this.color = color;
        this.location = location;
    }
    color: string;
    location: string;
}

let myCar = new Car3("Silver", "Lahore");
let alexCar = new Car3("Black", "USA");

console.log(`Color of my car is ${myCar.color} and my car is located in ${myCar.location}`);
console.log(`Color of ALex car is ${alexCar.color} and Alex car is located in ${alexCar.location}`);
