import React from 'react'
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import SingleBlog from '../components/SingleBlog';
import { addBlog } from '../myredux/actions/blogaction';

const Home = () => {
  const dispatch = useDispatch();
  const mydata:any = useSelector(state=>state);
  const addBlogInHome =()=>{
      dispatch(addBlog({img:"https://reactjs.org/logo-og.png",title:"react js",desc:"redux is funny"}))   
  }
  return (
    <>
    <button onClick={addBlogInHome}>add blog</button>
    <Row>
    {mydata.map((item:any,c:number)=>{
       return <SingleBlog title={item.title} desc={item.desc} photo={item.img} key={c} />
        
    })}
    </Row>
    </>
  )
}

export default Home