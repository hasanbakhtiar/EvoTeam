// let info = 5;
// console.log(info);


// loops 

// while 
// let count = 0;
// while(count<=10){ //condition
//         console.log(count); // result
//                 count++;// action
// }

// do while
// let count = 0;
// do{
//     console.log(count); //result
//     count++; //action
// }while(count>10); //condition

// for
// for(let count = 0; count<10; count++){
//     console.log(count);
// }

// Array

// const info = ['table','book','pen'];
// for(let i = 0; i<3;i++){
//     console.log(info[i]);
// }


// const info = [];
// info[0] = 'table';
// info[1] = 'book';
// info[2] = 5;
// console.log(info);
// const info = ['table','book','pen'];
// info['data'] = 'new value';
// console.log(info['data']);

// const info = ['table','book',[1,2,3,[true,['data',['laptop'],'hello'],false],4,5]];
// console.log(info[2][3][1][1][0]);

// for in
// const info = ['table','book','laptop','pen'];
// for( let x in info){
//     console.log(info[x]);
// }

// for of

const info = ['table','book','laptop','pen'];
console.log(...info);
// for( let x of info){
//     console.log(x);
// }


// for(let x = 0; x<100; x+=10){
//     if (x == 50) {
//         continue;
//     }
//     console.log(x);
// }

// Object

// const car = {
//     brand:"BMW",
//     model:"X7",
//     year:2022,
//     price:[10,20,30,50]
// }

// console.log(car.price[0]);


const cars = [
    {
        brand:'bmw',
        model:'x7',
        color:"white"
    },
    {
        brand:'mercedes',
        model:'s500',
        color:"black"
    },
    {
        brand:'audi',
        model:'a7',
        color:"red"
    }
]
for(let x in cars){
    console.log(cars[x].color);
}


