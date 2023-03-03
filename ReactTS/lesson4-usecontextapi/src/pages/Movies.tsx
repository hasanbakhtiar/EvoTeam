import  { useContext } from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { MovieContext } from '../context/MovieContext'

const Movies = () => {
  const [movies] = useContext<any>(MovieContext)
  return (
    <>
    <h1 className='text-center my-5'>Movie List</h1>
    <Row>
    {movies.map((item:any,i:number)=>(
     <SingleCard key={i} ptitle={item.name} pimg={item.image}  pid={item.id}/>
    ))}
    </Row>
    
    </>
  )
}

export default Movies