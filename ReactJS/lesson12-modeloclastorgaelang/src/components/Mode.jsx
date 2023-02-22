import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'

const Mode = () => {
    const [mode, setMode] = useState(localStorage.getItem('mode'));
    useEffect(() => {
        document.body.className = mode;

    }, [mode])
    return (
        <>
            
                <div className='mt-5'>
                    <p>current mode:{mode}</p>
                    <Button variant='warning' onClick={() => { mode === 'light' ? setMode('dark', localStorage.setItem('mode', "dark")) : setMode('light', localStorage.setItem('mode', "light")) }}>mode</Button>
                    
                </div>

           
            <div className='box'></div> 
        </>
    )
}

export default Mode