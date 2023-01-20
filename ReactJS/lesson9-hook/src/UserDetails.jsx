import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'



const UserDetails = () => {


     const [user,setUser] = useState([]);
    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setUser(res.data))

    },[])
    
    const {id} = useParams();

    const detailItems = user.find(p=>p.id == id);

  return (
    <>
    
    {detailItems=== undefined ? <h1>Loading...</h1>:     <div className='container mt-5'>
        <h1 className='text-center'>User Details</h1>
        <p>{detailItems.name}</p>
        <p>{detailItems.username}</p>
        <p>{detailItems.address.street}</p>
        <p>{detailItems.address.city}</p>
        <p>{detailItems.email}</p>
        <Link to="/users">Back</Link>

        
    </div>}
    
    
    </>
  )
}

export default UserDetails