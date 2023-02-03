import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Movies</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <NavLink className="me-5" to="/">Home</NavLink>
          <NavLink to="/movies">Films</NavLink>
       
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header