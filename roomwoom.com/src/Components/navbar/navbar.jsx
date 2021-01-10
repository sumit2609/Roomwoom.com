import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
// import Button from 'react-bootstrap/Button';

import "./navbar.css";
import Logo from "../../assets/navbarimage/logo.svg";

const navbar = () =>{
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <Image className="logo" src={Logo} alt="RoomWoom" fluid />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#Aboutus">About Us</Nav.Link>
                <Nav.Link href="#Bookyourspace">Book Your Space</Nav.Link>
                <Nav.Link href="#Rentyourproperty">Rent yout Property</Nav.Link>
                <Nav.Link href="#Contactus">Contact Us</Nav.Link>
                <button className="button">Login/Sign Up</button>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default navbar;