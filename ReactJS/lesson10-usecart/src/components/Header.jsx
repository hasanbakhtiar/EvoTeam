import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Header = () => {
  const { totalItems } = useCart();
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#"><NavLink style={{"textDecoration":"none"}} className='text-dark' to="/">Best Shop</NavLink></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mx-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
         <NavLink style={{"textDecoration":"none"}} className='text-dark me-5' to="/">Home</NavLink>
          <NavLink style={{"textDecoration":"none"}} className='text-dark' to='/products'>Products</NavLink>
       
        </Nav>
        <Nav className="d-flex">
   
          <NavLink to="/cart"><Button variant="success">Cart({totalItems})</Button></NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header