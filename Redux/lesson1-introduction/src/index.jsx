import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { createStore } from 'redux';
import {v4 as uuid} from "uuid"
const addBlog = ({title,desc})=>({
  type:"ADD_BLOG",
  blog:{
    id:uuid(),
    title:title,
    desc:desc
  }
})


const blogState = [];

const blogReducer = (state=blogState,action)=>{
  switch(action.type){
      case "ADD_BLOG":
        return [...state,action.blog]
  }
}

const store = createStore(blogReducer)

store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(addBlog({title:"redux js",desc:"redux is funny"}))
store.dispatch(addBlog({title:"react js",desc:"redux is funny"}))










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hello</h1>
  </React.StrictMode>
);

