import React, { useMemo, useState } from 'react'
import { Container,Button } from 'react-bootstrap';
import userdata from '../data/userdata';
const AppUseMemo = () => {
    const [count,setCount] = useState(0);
    const [userId,setUserId] = useState(null);
    const getUserRows =()=>{
        console.log('getUserRows runnig...');

        return userdata.map(item=><li onClick={()=>{setUserId(item.id)}} key={item.id}>{item.name}</li>)
    }
    const userRows = useMemo(()=>getUserRows(),[userId]);

  return (
    <Container className='mt-5'>
        <span className='me-2'>{count}</span>
        <Button variant="success" onClick={()=>{setCount(count+1)
        console.log('count is running...');
        }}>+1</Button>
        {userRows}
        <div>
            <span className='text-danger'>user id:</span>{userId}
        </div>
    </Container>
  )
}

export default AppUseMemo