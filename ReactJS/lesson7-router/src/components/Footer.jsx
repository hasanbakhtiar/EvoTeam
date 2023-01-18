import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
   <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link className="nav-link px-2 text-muted" to='/'>Home</Link></li>
      <li className="nav-item"><Link className="nav-link px-2 text-muted" to="/about">About</Link></li>
      <li className="nav-item"><Link className="nav-link px-2 text-muted" to="/contact">Contact</Link></li>
  
    </ul>
    <p className="text-center text-muted">© {new Date().getFullYear()} Company, Inc</p>
  </footer>
</div>

    )
  }
}

export default Footer