import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { GiTreeBeehive } from "react-icons/gi";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="bg-dark text-light fs-6"
      sticky="top"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center fs-4"
        >
          <span
            className="p-1 me-2"
            style={{ color: "#5D5DFF", fontSize: "50px" }}
          >
            <GiTreeBeehive />
          </span>
          Job Hive
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/dashboard">
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/assessmentPage">
              <Nav.Link>Create Assessment</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
