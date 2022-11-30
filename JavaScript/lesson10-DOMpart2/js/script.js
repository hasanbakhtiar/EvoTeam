import { langData } from "../data/datalist.js";
const btn = document.querySelector('#langbtn');
const btnMode = document.querySelector('#mode');
const langItem = document.querySelectorAll('.nav-link');
const nav  = document.querySelector('nav');
btn.onclick = ()=>{
    if (btn.innerHTML === 'AZ') {
        for (let i in langData.az) {
            langItem[i].innerHTML = langData.az[i];
        }
        btn.innerHTML = "EN";
    }else{
        for (let i in langData.en) {
            langItem[i].innerHTML = langData.en[i];
        }
        btn.innerHTML = "AZ";
    }
}

btnMode.onclick=()=>{
    if (btnMode.innerHTML === 'Dark') {
        btnMode.innerHTML = 'Light';
        nav.attributes[0].value = 'navbar navbar-expand-lg bg-dark navbar-dark'
    }else{
        btnMode.innerHTML = 'Dark'
        nav.attributes[0].value = 'navbar navbar-expand-lg bg-light navbar-light'

    }
}





// import { country } from "../data/datalist.js";
// const text = document.querySelectorAll('h1');
// const btn = document.querySelectorAll('button');
// for(let x=0; x<5;x++){
//     btn[x].addEventListener('click',()=>{
//         if (text[x].innerHTML === country[x].name) {
//             text[x].innerHTML = country[x].capital;
//         }else{
//             text[x].innerHTML = country[x].name
//         }
//     })
// }
