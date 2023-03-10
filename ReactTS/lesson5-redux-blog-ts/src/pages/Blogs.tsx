import React from 'react'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import SingleBlog from '../components/SingleBlog'

const Blogs:React.FC<any> = () => {
  const pvalue:any = useSelector(state=>state)
  return (

       <>
       <h1 className='text-center my-5'>Blogs</h1>
        <Row>
          {pvalue.map((item:any,c:number)=>(
            <SingleBlog title={item.title} desc={item.desc} photo={item.img} key={c} />

          ))}
        </Row>
       </>
        
   
  )
}



export default Blogs