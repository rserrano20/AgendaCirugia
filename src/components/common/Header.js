import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href='/'>AGENDA DE CIRUGIA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              exact={true}
              to='/'
              className="nav-link"
              activeClassName="active"
            >
              Inicio
            </NavLink>
            <NavLink
              exact={true}
              to='/cirugias'
              className="nav-link"
              activeClassName="active"
            >
              {" "}
              Cirugias
            </NavLink>
            <NavLink
              exact={true}
              to='/cirugias/nuevo'
              className="nav-link"
              activeClassName="active"
            >
              Agregar Cirugia
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
