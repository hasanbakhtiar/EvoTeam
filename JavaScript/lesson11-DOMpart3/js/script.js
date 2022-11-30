const btn = document.querySelectorAll('button');
const box = document.querySelector('#box');

btn[0].onclick=()=>{
    box.attributes[1].value = 'left';
    box.style.backgroundColor = 'green';
}
btn[1].onclick=()=>{
    box.attributes[1].value = 'right';
    box.style.backgroundColor = 'green';
}
btn[3].onclick=()=>{
    box.attributes[1].value = 'bottom';
    box.style.backgroundColor = 'green';
}
btn[2].onclick=()=>{
    box.attributes[1].value = 'top';
    box.style.backgroundColor = 'green';
}