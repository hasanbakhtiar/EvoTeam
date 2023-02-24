import React from 'react'
import { connect, useDispatch } from 'react-redux'
import BlogForm from '../../../components/BlogForm'
import { addBlog, addBlogToDatabase } from '../../../myredux/actions/blogaction'

const AddBlog = props => {
  const dispatch = useDispatch();
  return (
    <>
      <h1 className='text-center my-5'>Add Blog</h1>
      <BlogForm onFormSubmit={fd=>{
        dispatch(addBlogToDatabase(fd));
        props.history.push('/admin')
        
      }}/>
    </>
  )
}

export default connect()(AddBlog)