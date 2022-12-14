// import {products} from '../data/products.js';


// products.map((a,count)=>{
//     console.log(count+a.title);
// })


// const comingData = async()=>{
//    let data = await fetch('https://fakestoreapi.com/products');
//    let newData = await data.json();
//    console.log(newData);

// }
// comingData();

const comingData =()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
        let card = "";
        data.map((fd,i)=>{
        card+=`
      <div class="col-12 col-sm-6 col-md-4">
      <div class="card">
      <img height="300" src="${fd.image}" class="card-img-top" alt="${fd.title}">
      <div class="card-body">
        <h5 class="card-title">${fd.title.substr(0,10)}</h5>
        <p class="card-text">${fd.description.substr(0,30)}...</p>
        <p class="card-text">${fd.price}$</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      </div>
            `
        })
        document.querySelector('#con').innerHTML = card;
    })
    .catch(err=>console.log(err))

    
}
comingData();