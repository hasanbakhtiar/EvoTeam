import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <div className="container">
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter