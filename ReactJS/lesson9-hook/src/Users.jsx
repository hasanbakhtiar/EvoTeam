import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
    const [user,setUser] = useState([]);
    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setUser(res.data))
    },[])
  return (
    <>
      <h1>Hello</h1>
      {user.map(item=>{
        return <p><Link to={`/users/${item.id}`} key={item.id}>{item.name}</Link></p>
      })}
    </>
  );
};

export default Users;
