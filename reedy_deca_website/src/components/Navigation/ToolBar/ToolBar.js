import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './ToolBar.css';

const toolBar = (props) => {

    const navbarStyle = {
        backgroundColor: '#25783b',
        position: 'fixed',
        width: '100%',
        zIndex: '600'
    }

    const navbarElementStyle = {
        color: 'white',
        fontFamily: 'Oswald, sans-serif',
        fontSize: '1.3em'
    }

    const brandElementStyle = {
        color: 'white',
        fontFamily: 'Oswald, sans-serif',
        fontSize: '1.5em'
    }

    const navbarElements = ["EVENTS", 'MEMBERSHIP', 'OFFICERS', 'CALENDAR', 'STORE', 'CONTACT'].map(element => {
        return <Nav.Link href={element.toLowerCase()} style={navbarElementStyle}>{element}</Nav.Link>
    });

    return (
        <Navbar class="mainBar" variant="dark" expand="md" style={navbarStyle}>
            <Navbar.Brand href="#home" style={brandElementStyle}>REEDY DECA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: 'white'}}/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {navbarElements}
            </Nav>
            </Navbar.Collapse>
        </Navbar> 
    );
}

export default toolBar;