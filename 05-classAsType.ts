// whenever  we declare a calss it creates the calss itself as well as a type (implicitely) that can be used in type annotations.

class Car8{
    constructor(color: string, location: string, vin: string){
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    color: string;
    location: string;
    vin: string
    power(state: boolean){
        if(state === true){
            console.log("Car is starting.");  
        } else {
            console.log("Car is turning off.");    
        }
    }
}

let myCar: Car8     // assigning the type "Car8" which is also a calss, to variable that will require all the required properties & methods of "Car8".
myCar = {
    color: "Silver",
    location: "Lahore",
    vin: "1C",
    power() {}        // power is a method in type "Car8"
}


// class Student{
//     constructor(name: string, id: number){
//         this.name = name;
//         this.id = id;
//     }
//     name: string
//     id: number
// }

// type Student1 = {
//     name: string;
//     id: number
// }

// let student1:Student1 ={
//     name: "Kiran",
//     id: 1,
// }

// let student2: Student = {
//     name :"Imran",
//     id: 2
// }