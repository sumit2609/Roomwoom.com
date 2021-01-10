import React from 'react';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import Logo from "../../assets/searchbar/logo.svg";
import './searchlogo.css';

const searchlogo = () => {
    return (
        <div>
            <Container>
                <div className="text-center pt-3">
                <Image className="searchlogo" src={Logo} alt="RoomWoom" fluid />
                </div>
            </Container>
        </div>
    );
};

export default searchlogo;