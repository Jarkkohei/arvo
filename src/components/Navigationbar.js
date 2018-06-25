import React, { Component } from 'react'

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

class Navigationbar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect fixedTop fluid>
                <Navbar.Header>
                    <Navbar.Brand><Link to="/">A</Link></Navbar.Brand>

                    {/*
                    <Link to={{
                        pathname: '',
                        hash: '#submit',
                        search: '?something=true'
                    }}>
                    */}

                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/main">
                            <NavItem>Pääsivu</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/settings">
                            <NavItem>Asetukset</NavItem>
                        </LinkContainer>
                    </Nav>

                    <Nav pullRight>
                        <LinkContainer to="/about">
                            <NavItem>Tietoja</NavItem>
                        </LinkContainer>
                    </Nav>

                </Navbar.Collapse>

            </Navbar>
        )
    }
}

export default Navigationbar;
