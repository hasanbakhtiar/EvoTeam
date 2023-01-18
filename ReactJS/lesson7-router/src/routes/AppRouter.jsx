import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Footer from '../components/Footer'
import Products from '../pages/Products'
import NotFoundPage from '../pages/NotFoundPage'
// npm i react-router-dom 
class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <div className="container">
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default AppRouter