import React from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="primary" expand="lg" sticky="top" variant="dark">
      <Container className="container-fluid">
        <Navbar.Brand href="/">
          <img
            src="/images/movies-logo.png"
            alt="movies logo"
            className="moviesLogo"
          />
          MOVIE TIME
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/movies">
              Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/add">
              Add Movies
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            <img src="/images/user.png" alt="user" className="userIcon" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/login">Login</Dropdown.Item>
            <Dropdown.Item href="/register">Register</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/logout">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default NavBar;
