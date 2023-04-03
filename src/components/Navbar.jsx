import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import './navbar.css'

const Container =styled.div`
height:80px ;
background-color:black;
`;

function Navbar(props) {
    return (
        <Container>
   navbar
<Link to="/login" className='a'>LOGIN</Link>
<Link to="/register" className='a'>CREATE AN ACCOUNT</Link>

        </Container>
    );
}

export default Navbar;