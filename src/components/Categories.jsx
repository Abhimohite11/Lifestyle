import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { categories } from '../data';
import CategoriesItem from './CategoriesItem'

const Container=styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    ${mobile({padding:"0px", flexDirection:"column"})}`;

function Categories(props) {
    
    return (
        <Container>
            {categories.map((item)=>(
                <CategoriesItem item={item} key={item.id}/>
            ))}
        </Container>
    );
}

export default Categories;