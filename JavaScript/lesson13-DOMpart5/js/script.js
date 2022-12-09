const text = document.querySelector("p");
const h1 = document.querySelector("h1");
// text.innerHTML = h1.firstChild.nodeType;
// text.innerHTML = h1.nodeName;

// text.innerHTML = document.querySelector('ul').lastChild.firstChild.nodeValue;
// text.innerHTML = document.querySelector('ul').childNodes[3].firstChild.nodeValue;
// text.innerHTML = document.querySelector('ul').firstChild.parentElement.nodeName;
// text.innerHTML = document.querySelector('ul').firstChild.nextSibling.firstChild.nodeValue;
// text.innerHTML = document.querySelector('ul').childNodes[1].previousSibling.firstChild.nodeValue;

// const myNewElement = document.createElement('h3');
// const myNewText  = document.createTextNode("Hello new element");
// myNewElement.appendChild(myNewText);
// document.body.appendChild(myNewElement);

// Todo APP
const btn = document.querySelector("#button-addon2");
const input = document.querySelector("input");
let taskList;
const localdata = localStorage.getItem("localItem");
const localItems = JSON.parse(localdata);

const addTodo = () => {
  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }
  taskList.push(input.value);
  localStorage.setItem("localItem", JSON.stringify(taskList));
  showList();
};

const showList = () => {
  let outPut = "";
  let todoList= document.querySelector('#todoList');
  if (localItems === null) {
    taskList = [];
  }else{
    taskList = localItems;
  }
  taskList.forEach((fd,i)=>{
    outPut+= ` <button type="button" class="list-group-item list-group-item-action">${fd}</button>`

  })
  todoList.innerHTML = outPut;
};
showList();;

btn.onclick = addTodo;

document.querySelector('#clear').onclick=()=>{
    localStorage.clear();
}


// const todoItem = document.createElement('button');
// todoItem.innerHTML = input.value;
// todoItem.setAttribute('class','list-group-item list-group-item-action')
// const todoList= document.querySelector('#todoList');
// todoList.appendChild(todoItem);
// input.value = "";

// todoItem.onclick=()=>{
//     // todoItem.style.backgroundColor = '#000';
//     // todoItem.style.color = '#fff';
//     todoItem.style.textDecoration = 'line-through';
// }

// todoItem.ondblclick=()=>{
//   todoItem.remove();
// }
