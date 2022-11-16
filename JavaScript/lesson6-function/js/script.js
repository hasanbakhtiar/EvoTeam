// function name(params){
//     codes
// }

// function infoPerson(name,surname,age){
//     console.log(name+" "+surname+" is:"+age);   
// }

// infoPerson("Jhone","Adler",20);
// infoPerson("Artur","Morgan",40);

// (function infoPerson(name,surname,age){
//     console.log(name+" "+surname+" is:"+age);   
// })("Artur","Morgan",40)



// function infoPerson(name,surname,age){
//   return  name+" "+surname+" is:"+age   
// }

// console.log(infoPerson("Jhone","Adler",20));



// function infoData (coming,going){
//     let productList = ['table','pen','book'];
//     if (coming === "success") {
//         console.log("Coming data is:"+coming + " Going data is:" +going);  
//     }else{
//          for(let x of productList){
//             console.log(x);
//         }
//     }
// }

// function DataCenter(checkData){
//  return infoData(checkData,true)
// }


// DataCenter("success");


// const info = function(a) {
//     return a
// }
// console.log(info('hello'));

// ES6
// ()=>{}
// const info =()=>{
//     return'hello';
// }

// console.log(info());


// const infoData= (dataOne=40,dataTwo=30)=>{
//     return dataOne + dataTwo;
// }

// // NaN = not a number 
// console.log(infoData());


const infoCar ={
    brand:"BMW",
    model:"X5",
    year:2022,
    newCar:true,
    calculateSpeed:(km,hour)=>{
        return "Speed:"+km/hour+"km/h";
    }
}

console.log(infoCar.calculateSpeed(100,2));