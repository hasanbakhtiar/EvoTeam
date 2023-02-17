import React, { useEffect, useLayoutEffect, useState } from 'react'

const AppUseLayoutEffect = () => {
    const [data,setData] = useState('Hello')
    useEffect(()=>{
        // alert('changed');
        setData('bye');
    },[])
  return (
    <div>
        {data}
    </div>
  )
}

export default AppUseLayoutEffect