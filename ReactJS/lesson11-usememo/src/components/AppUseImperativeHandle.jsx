import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'

const MyInput =forwardRef((props,ref)=>{
    const [fontSize,setFontSize] = useState(14);


    useImperativeHandle(ref,()=>({
        hi:sayHi,
        fontInc:()=>{setFontSize(fontSize+2)},
        fontDec:()=>{setFontSize(fontSize-2)}
    }))
    
    
    const sayHi =()=>{
        alert('hello');
    }
    
    
    return (
        <input type="text" style={{fontSize}}/>
    )
})


const AppUseImperativeHandle = () => {
    const inputRef = useRef();
    const handleClick=()=>{
            inputRef.current.hi();
    }
    
 
  return (
    <div>
            <MyInput ref={inputRef}/>
            <Button onClick={handleClick} className="btn-sm">alert</Button>
            <Button variant='warning' onClick={()=>{inputRef.current.fontInc()}} className="btn-sm mx-2">inc</Button>
            <Button variant='light' onClick={()=>{inputRef.current.fontDec()}} className="btn-sm">dec</Button>

    </div>
  )
}

export default AppUseImperativeHandle