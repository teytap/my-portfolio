import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container className="responsive">
          <Navbar.Brand>
            <img src="/images/mehtapp.png" width="50" className="avatar" />{" "}
            Mehtap Tataroğlu
          </Navbar.Brand>
          <Nav className=" ms-0 nav-responsive">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Item>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/work">
                Work
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
