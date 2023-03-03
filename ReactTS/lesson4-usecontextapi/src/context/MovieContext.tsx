import axios from "axios";
import { useState,createContext, useEffect } from "react";

interface propType{
  children:any[]
}

type AppContextType={}




export const MovieContext = createContext<AppContextType|any>(null);


export const MovieProvider =(props:propType)=>{
  const [movies,setMovies] = useState([]);
  
  useEffect(()=>{
    axios
    .get('https://rickandmortyapi.com/api/character')
    .then((res:any)=>{setMovies(res.data.results)
      console.log(res);
    })
    
    
  },[])
  return(
    <MovieContext.Provider value={[movies,setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
} 