// document.querySelector('button').onclick=()=>{document.querySelector('p').className = 'red'}
// document.querySelector('input').onkeydown=()=>{
//     document.querySelector('input').style.height = '100px';
//     document.querySelector('input').style.transition = '1s';
//     document.querySelector('input').style.backgroundColor = 'red';
// }

// document.querySelector('input').onkeyup=()=>{
//     document.querySelector('input').style.height = '50px';
//     document.querySelector('input').style.transition = '1s';
//     document.querySelector('input').style.backgroundColor = 'white';
// }
// const input = document.querySelector('input');
// const btn = document.querySelector('button');
// btn.onclick=()=>{
//     document.querySelector('p').innerHTML = input.value;
// }

import * as data from "../data/data.js";

const modeBtn = document.querySelector("#mode-btn");
const langBtn = document.querySelector("#lang-btn");

const nav = document.querySelector("nav");
const navItem = document.querySelectorAll(".nav-link");

modeBtn.onclick = () => {
  if (nav.className === data.mode.light) {
    localStorage.setItem("mode", data.mode.dark);
    nav.className = localStorage.getItem("mode");
  } else {
    localStorage.setItem("mode", data.mode.light);
    nav.className = localStorage.getItem("mode");
  }
};

langBtn.onclick = () => {
  if (langBtn.innerHTML === "AZ") {
    localStorage.setItem("lang", data.lang.az);
    for (let i in data.lang.az) {
      navItem[i].innerHTML = data.lang.az[i];
    }
    localStorage.setItem('langbtn','EN');
    langBtn.innerHTML =localStorage.getItem('langbtn');
  } else {
    localStorage.setItem("lang", data.lang.en);
    for (let i in data.lang.en) {
      navItem[i].innerHTML = data.lang.en[i];
    }
    localStorage.setItem('langbtn','AZ');
    langBtn.innerHTML =localStorage.getItem('langbtn');

  }
};

if (
  localStorage.getItem("mode") === null &&
  localStorage.getItem("lang") === null
) {
  localStorage.setItem("mode", data.mode.light);
  localStorage.setItem("lang", data.lang.az);
}
nav.className = localStorage.getItem("mode");
for (let i in data.lang.az) {
    navItem[i].innerHTML = localStorage.getItem('lang').split(',')[i];
  }
langBtn.innerHTML =localStorage.getItem('langbtn');