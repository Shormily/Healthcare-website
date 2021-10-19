import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { user } = useAuth();
  return (
    <div className="padding">
      <Navbar bg="primary" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">City Hospital</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto d-flex fundation">
              <Nav.Link as={HashLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/serv">
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/about">
                About US
              </Nav.Link>

              <Nav.Link as={HashLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={HashLink} to="/signup">
                Sign Up
              </Nav.Link>
            </Nav>
            <Navbar.Text>
              Signed in as:{user?.email && <span>{user?.displayName}</span>}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
