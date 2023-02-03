import { useState,createContext } from "react";
import movielist from "../data/movielist";

interface propType{
  children:any[]
}

type AppContextType={}
interface stateType{
  id:string,
  title:string,
  price:number,
  img:string
}



export const MovieContext = createContext<AppContextType|null>(null);


export const MovieProvider =(props:propType)=>{
  const [movies,setMovies] = useState<stateType[]>(movielist);

  return(
    <MovieContext.Provider value={[movies,setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
} 