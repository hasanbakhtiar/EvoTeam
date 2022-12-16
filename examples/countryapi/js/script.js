const btns = document.querySelectorAll("button");
const row = document.querySelector(".row");

let countStart = 0;
let countEnd = 50;

const fetchApi = async () => {
  const data = await fetch("https://restcountries.com/v3.1/all");
  let comingdata = await data.json();
  let card = "";
  for (let x = countStart; x < countEnd; x++) {
    card += `
      <div class="col-12 col-sm-6 col-md-4">
      <div class="card" >
      <img src="${comingdata[x].flags.png}" class="card-img-top" alt="${
      comingdata[x].name.common
    }">
      <div class="card-body">
        <h5 class="card-title">${comingdata[x].name.common}</h5>
        <p class="card-text">${x + 1}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
      `;
  }
  row.innerHTML = card;
};

btns[0].onclick = () => {
   countStart = 0;
   countEnd = 50;
  fetchApi();
};
btns[1].onclick = () => {
    countStart = 50;
    countEnd = 100;
   fetchApi();
 };
 btns[2].onclick = () => {
    countStart = 100;
    countEnd = 150;
   fetchApi();
 };
 btns[3].onclick = () => {
    countStart = 150;
    countEnd = 200;
   fetchApi();
 };
 btns[4].onclick = () => {
    countStart = 200;
    countEnd = 250;
   fetchApi();
 };
 fetchApi();
