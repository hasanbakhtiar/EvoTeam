import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" className="navbar-dark" expand="lg">
      <Container fluid>
        <LinkContainer to="/">
        <Navbar.Brand >Blog App</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blogs">
            <Nav.Link>Blogs</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex">
          
            <LinkContainer to="/admin">
            <Button variant="warning">Login</Button>
            </LinkContainer>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
