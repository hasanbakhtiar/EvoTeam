import { Button } from 'react-bootstrap'
import React from 'react'
import { connect, useDispatch } from 'react-redux'
import BlogForm from '../../../components/BlogForm'
import { editBlog, editBlogFromDatabase, removeBlog, removeBlogFromDatabase } from '../../../myredux/actions/blogaction'

const EditBlog = props => {
    
    const dispatch = useDispatch();
  return (
    <>
    <h1 className='text-center my-5'>Edit Blog</h1>
        <BlogForm editblog={props.pvalue}
        onFormSubmit={fd=>{
            dispatch(editBlogFromDatabase(props.pvalue.id,fd))
           props.history.push('/admin')
        }}
        />
        <Button variant='danger' onClick={()=>{
            dispatch(removeBlogFromDatabase(props.pvalue.id))
           props.history.push('/admin')

        }}>Del</Button>
    </>
  )
}

const MapStateToProps=(state,props)=>{
    return({
        pvalue:state.find(b=>{
            return b.id === props.match.params.id
        })
    })
}

export default connect(MapStateToProps)(EditBlog);