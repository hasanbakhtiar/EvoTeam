import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BlogForm from '../../../components/BlogForm'
import { addBlog } from '../../../myredux/actions/blogaction'

const AddBlog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <h1 className='text-center my-5'>Add Blog</h1>
      <BlogForm onFormSubmit={fd=>{
        dispatch(addBlog(fd));
        navigate('/admin')
        
      }}/>
    </>
  )
}

export default connect()(AddBlog)