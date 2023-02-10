import {v4 as uuid} from "uuid"

export const addBlog = ({title,desc,img})=>({
  type:"ADD_BLOG",
  blog:{
    id:uuid(),
    title,
    desc,
    img
  }
})

export const editBlog =(id,update)=>({
  type:"UPDATE_BLOG",
  id,
  update
})


export const removeBlog =({id})=>({
  type:"REMOVE_BLOG",
  id
})