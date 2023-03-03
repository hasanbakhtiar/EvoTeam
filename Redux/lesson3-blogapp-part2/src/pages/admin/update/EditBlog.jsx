import { Button } from 'react-bootstrap'
import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BlogForm from '../../../components/BlogForm'
import { editBlog, removeBlog } from '../../../myredux/actions/blogaction'

const EditBlog = props => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  return (
    <>
    <h1 className='text-center my-5'>Edit Blog</h1>
        <BlogForm editblog={props.pvalue}
        onFormSubmit={fd=>{
            dispatch(editBlog(props.pvalue.id,fd))
            {console.log(fd)}
            navigate('/admin')
        }}
        />
        <Button variant='danger' onClick={()=>{
            dispatch(removeBlog({id:props.pvalue.id}))
            navigate('/admin')
        }}>Del</Button>
    </>
  )
}

const MapStateToProps=(state)=>{
    const link = window.location.pathname.slice(6,99);
    return({
        pvalue:state.find(p=>p.id ===link)
    })
}

export default connect(MapStateToProps)(EditBlog);