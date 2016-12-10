import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <Navbar>
          <Nav>
            <LinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={2} title="Projects" id="basic-nav-dropdown">
              <LinkContainer to="/tic-tac-toe/">
                <MenuItem eventKey={2.1}>TicTacToe</MenuItem>
              </LinkContainer>
              <LinkContainer to="/pong/">
                <MenuItem eventKey={2.2}>Pong</MenuItem>
              </LinkContainer>
              <LinkContainer to="/currency-converter/">
                <MenuItem eventKey={2.3}>Currency Converter</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/about/">
              <NavItem eventKey={3}>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact/">
              <NavItem eventKey={4}>Contact</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
      </div>
    );
  }
}