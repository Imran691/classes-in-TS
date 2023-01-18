// Whenever we create new object / instance using class, constructor function is called and our new object is created.
// we are over riding line # 09 property color in line # 07 and assigning it the value that is present in input in line # 06 as parameter. Now we can declare the type of color property instaed of hard coding it.


class Car2 {
  constructor(color: string) {
    this.color = color;             //"this" keyword is referring to our class
  }
  color: string;
}

let myCar = new Car2("Silver");
let hiraCar = new Car2("Red");
let alexCar = new Car2("Blue");

console.log(`My car color is ${myCar.color}.`);
console.log(`Hira's car color is ${hiraCar.color}.`);
console.log(`Alex's car color is ${alexCar.color}.`);



