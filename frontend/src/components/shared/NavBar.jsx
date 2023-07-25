import React from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import Login from "../Login";
import Logout from "../Logout";

const NavBar = () => {
  const user = useSelector(selectCurrentUser);
  return (
    <Navbar bg="primary" expand="lg" sticky="top" variant="dark">
      <Container className="container-fluid">
        <Navbar.Brand as={Link} to="/">
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
            {user && (
              <Nav.Link as={Link} to="/add">
                Add Movies
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            <img src="/images/user.png" alt="user" className="userIcon" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {user ? (
              <>
                <Dropdown.Item as={Link} to="/user">
                  Profile
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Logout}>Logout</Dropdown.Item>
              </>
            ) : (
              <Dropdown.Item as={Login}>Login</Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default NavBar;
