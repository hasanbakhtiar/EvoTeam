import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
<div style={{"height":"69vh"}} className="px-4 py-5 my-5 text-center">
  <h1 className="display-5 fw-bold">Best Shop</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">We sales best product!</p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <Link to="/products"><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Shop Now</button></Link>
    </div>
  </div>
</div>

  )
}

export default Home