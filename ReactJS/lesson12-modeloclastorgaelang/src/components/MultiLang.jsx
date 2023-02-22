import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import products from '../data/products'

const MultiLang = () => {
    const [lang,setLang] = useState(localStorage.getItem('lang'))


    const handleClick = (langselect)=>{

        langselect === 'az' ? setLang('az',localStorage.setItem('lang','az')):setLang('en',localStorage.setItem('lang','en'))

        
    }
    
  return (
    <div>
        <h1>{lang}</h1>
       <>
       <Button className='me-3' onClick={()=>{handleClick('az')}}>az</Button>
       <Button onClick={()=>{handleClick('en')}}>en</Button>
       {localStorage.getItem('lang') === 'az'?products.az.map(item=>(
        <li>{item.title}</li>
       )):products.en.map(item=>(
        <li>{item.title}</li>
       ))}
       </>
    </div>
  )
}

export default MultiLang