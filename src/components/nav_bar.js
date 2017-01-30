import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

class NavBar extends Component {

  renderSignInOutTab = () => {
    if (!this.props.authenticated) {
      return (
        <Nav pullRight className="sign-in-link">
          <LinkContainer to="/sign-in/">
            <MenuItem eventKey={5}>Sign In</MenuItem>
          </LinkContainer>
        </Nav>
      );
    } 
    else {
      return ([
        <Nav pullRight className="sign-in-link">
          <LinkContainer to="/sign-out/">
            <MenuItem eventKey={6}>Sign Out</MenuItem>
          </LinkContainer>
        </Nav>,
        <Nav pullRight>
          <LinkContainer to="/user/">
            <MenuItem eventKey={7}>User</MenuItem>
          </LinkContainer>
        </Nav>
      ]);
    }
  }

  handleClick = e => {
    console.log('Navbar is clicked');
    //e.preventDefault();
  }

  render() {
    return (
      <Navbar>
        <Nav>
          <LinkContainer to="/">
            <NavItem eventKey={1}><strong>Mike 5000</strong></NavItem>
          </LinkContainer>
          <NavDropdown eventKey={2} title="Projects" id="basic-nav-dropdown">
            <LinkContainer to="/tic-tac-toe/">
                <MenuItem eventKey={2.1}>Tic Tac Toe</MenuItem>
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
        {this.renderSignInOutTab()}
      </Navbar>
    );
  }
}

function mapStateToProps (state) {
    return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(NavBar);