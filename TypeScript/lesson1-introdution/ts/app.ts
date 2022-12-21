// type carType = {
//   brand: string;
//   model: string;
//   year: number;
//   carNew: boolean;
// }[];
// var carList:carType = [
//   {
//     brand: "BMW",
//     model: "X5",
//     year: 2022,
//     carNew: true,
//   },
//   {
//     brand: "Mercedes",
//     model: "S500",
//     year: 2020,
//     carNew: false,
//   },
//   {
//     brand: "Audi",
//     model: "A5",
//     year: 2002,
//     carNew: false,
//   },
// ];

// for(let x:number=0;x<carList.length;x++){
//     console.log(carList[x].brand);
    
// }

interface apiType {
    id: number;
    title:string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    }
  }[]

// var fetchApi = async()=>{
//         let comingData = await fetch('https://fakestoreapi.com/products')
//         let apiData:apiType = await comingData.json();
//         console.log(apiData);
        
// }

var fetchApi =()=>{
    fetch('https://fakestoreapi.com/products')
   .then(res=>res.json())
   .then((apiData:apiType)=>{
       console.log(apiData);
   })
    
}
fetchApi();