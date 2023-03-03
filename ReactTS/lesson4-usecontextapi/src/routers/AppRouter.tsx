import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import { MovieProvider } from '../context/MovieContext'
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'
import Movies from '../pages/Movies'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <MovieProvider>
    <Header />
     <Container>
     <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:url" element={<MovieDetails />}></Route>
        </Routes>
     </Container>
     </MovieProvider>
    </BrowserRouter>
  )
}

export default AppRouter