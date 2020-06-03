import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './ToolBar.css';

const toolBar = (props) => {

    const navbarStyle = {
        backgroundColor: '#25783b',
        position: 'fixed',
        width: '100%',
        zIndex: '600',
    }

    const navbarElementStyle = {
        color: 'white',
        fontFamily: 'Oswald, sans-serif',
        fontSize: '1.3em',
        
    }

    const brandElementStyle = {
        color: 'white',
        fontFamily: 'Oswald, sans-serif',
        fontSize: '1.5em'
    }

    const navbarElements = ["EVENTS", 'MEMBERSHIP', 'OFFICERS', 'CALENDAR', 'STORE', 'CONTACT'].map((element, igKey) => {
        return <Nav.Link key={igKey} href={"/" + element.toLowerCase()} style={navbarElementStyle}>{element}</Nav.Link>
    });

    return (
        <div>
            <Navbar className="mainBar" variant="dark" expand="md" style={navbarStyle}>
                <Navbar.Brand href="/" style={brandElementStyle}>REEDY DECA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: 'white'}}/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {navbarElements}
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="buffer"></div> 
        </div>
        
    );
}

export default toolBar;