import React from 'react';
import { Button, Container, Row } from 'reactstrap';
import CategoryChoice from './Components/CategoryChoice';
import './App.css';

const Categories = ({categories, pickUpCategory, chooseCategory}) => {
    return ( 
        <Container className="test">
            <header className="title">
                <h1>Choose a theme</h1>
            </header>
            <Row>
                {categories.map((category, index) => 
                <CategoryChoice pickUpCategory={() => pickUpCategory(category)} 
                                category={category} key={index}/>)}
            </Row>
            <div className="zoom-button transition">
            <Button onClick={chooseCategory} >Next</Button>
            </div>
        </Container>
    );
};
 
export default Categories;
