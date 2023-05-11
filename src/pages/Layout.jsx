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
        <Container>
          <Navbar.Brand>
            <img src="/images/mehtapp.png" width="50" className="avatar" />{" "}
            Mehtap Tataroğlu
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/work">Work</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact</Nav.Link>
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
