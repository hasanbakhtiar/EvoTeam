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
[];
// var fetchApi = async()=>{
//         let comingData = await fetch('https://fakestoreapi.com/products')
//         let apiData:apiType = await comingData.json();
//         console.log(apiData);
// }
var fetchApi = function () {
    fetch('https://fakestoreapi.com/products')
        .then(function (res) { return res.json(); })
        .then(function (apiData) {
        console.log(apiData);
    });
};
fetchApi();
