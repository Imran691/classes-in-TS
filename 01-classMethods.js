// we can store functions/methods in classes as in objects
// a class is a blue print that can be used to create numerous objets
class Car1 {
    color = "Silver"; // color is hard coded here
    power(state) {
        if (state === true) {
            console.log(`Car is starting.`);
        }
        else {
            console.log(`Shutting car down.`);
        }
    }
}
// creating object/instance using above class, it will contain all properties and methods of class
let myCar = new Car1();
console.log(myCar);
myCar.power(true);
export {};
