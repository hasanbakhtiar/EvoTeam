// document.getElementsByTagName('h1')[0].innerHTML = "Bye";
// document.getElementById('test').innerHTML = 'new value for p';
// document.getElementsByClassName('clsdata')[1].innerHTML = 'new data'

// Query Selector

// document.querySelector('#test').innerHTML = "new value"

// const changeInfo=()=>{
//     for(let x=0;x<5;x++){
//         document.querySelectorAll('li')[x].innerHTML = "new value"
//     }
// }

// document.querySelector('button').addEventListener("click",changeInfo);

const text  = document.querySelector('h1');
const btn = document.querySelector('button');

const info =()=>{
    if (text.innerHTML === "JavaScript") {
        text.innerHTML = "Programming Language";
        btn.innerHTML = "Super Programming Language";
    }else{
        text.innerHTML = "JavaScript";
        btn.innerHTML = "What is this?";

    }
}


btn.addEventListener("click",info);