import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';



const Container=styled.div`
width:100%;
height: 90vh;
background:lightblue;

background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper=styled.div`
width:25%;
padding: 20px;;
background-color:white;
${mobile({width:"75%"})}`;

const Title=styled.h1`
font-size:24px;
font-weight:300;`;

const Form=styled.form`
display: flex;
flex-direction: column;

`
const Input=styled.input`
width:90%;
height:40px;
border: none;
margin:10px 10px;
box-shadow: 3px 3px 2px lightgrey;
border-radius: 2px;
padding-bottom: 10px;


`;
const Button=styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;
margin-top:10px;
border-radius: 2px;`;



const Link=styled.a`
margin:5px 0px;
text-decoration:underline;
font-size:15px;
cursor:pointer;`;

function Login(props) {

    const navigate=useNavigate();

    const login=()=>{
        localStorage.setItem('login',true)
         navigate('/')
    }
    // useEffect(()=>{
    //     let login =localStorage.getItem('login');
    //     if(login){
    //         navigate('/')
    //     }
    // })

    return (
        <Container>
        <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
        <Input placeholder='username'/>
        <Input placeholder='password'/>
        <Button onClick={login}>LOG IN</Button>
        <Link>DO NOT REMEMBER THE PASSWORD?</Link>
        <Link>CREATE A NEW Account</Link>
        </Form>
        </Wrapper>
        </Container>
    );
}

export default Login;