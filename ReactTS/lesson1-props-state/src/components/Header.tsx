import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

interface userType {
  name: string;
  messageCount: number;
}

const user: userType = {
  name: "Morgan",
  messageCount: 10,
};

const Header = () => {
  const [login, setLogin] = useState(true);
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">Best Shop</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {login ? (
              <>
                Signed in as: <a href="#login">{user.name}</a> You have{" "}
                <span className="text-danger">{user.messageCount}</span> message
              </>
            ) : (
              <></>
            )}
            <Button
              className="ms-3"
              onClick={() => {
                login ? setLogin(false) : setLogin(true);
              }}
            >
             { login ? <span>Log out</span> : <span>Login</span>}
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
