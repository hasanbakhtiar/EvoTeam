// function Car(brand,model,year,newCar){
//         this.ibrand = brand;
//         this.imodel = model;
//         this.iyear = year;
//         this.inewCar = newCar;
// }

// Car.prototype.newProp = "new prop";

// const myCar = new Car("BMW","X5",2022,true);
// console.log(myCar.imodel);
// console.log(myCar.newProp);
// console.log(myCar);


import {Car} from './Car.js'; 
import {Moto} from './Moto.js';



const myCar = new Car("BMW","X5",2022,true);
console.log(myCar.calculateSpeed(100,2));
const myMoto = new Moto("Yamaha","s340",2020,false);
console.log(myMoto.calculateSpeed(1000,4));
console.log(myMoto.ibrand);


