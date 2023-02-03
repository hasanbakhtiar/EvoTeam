import { useContext } from "react";
import { useParams } from "react-router-dom"
import { MovieContext } from "../context/MovieContext";


const MovieDetails = () => {
    const [movies,setMovies] = useContext<any>(MovieContext)
    const {url} = useParams();
    const detailitems = movies.find((p:any)=>p.id === url);
  return (
        <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
            <img src={detailitems.img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
            </div>
            <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">{detailitems.title}</h1>
            <p className="lead">{detailitems.price}$</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">

            </div>
            </div>
        </div>
        </div>

  )
}

export default MovieDetails