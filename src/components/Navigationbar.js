import React, { Component } from 'react'

import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Navigationbar extends Component {
  render() {
    return (
        <Navbar collapseOnSelect fixedTop fluid>
            <Navbar.Header>
                <Navbar.Brand><a href="#brand">A</a></Navbar.Brand>

                <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">Pääsivu</NavItem>
                    <NavItem eventKey={2} href="#">Asetukset</NavItem>
                </Nav>

                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Tietoja</NavItem>
                </Nav>

            </Navbar.Collapse>

        </Navbar>
    )
  }
}

export default Navigationbar;
