import React from 'react';
import { Button, Container, Row } from 'reactstrap';
import CategoryChoice from './Components/CategoryChoice';
import './App.css';

const Categories = ({categories, pickUpCategory,categoryChoice, chooseCategory}) => {
    return ( 
        <Container className="card-support">
            <header className="title">
                <h1>Step 1/2 : Please choose category...</h1>
            </header>
            <Row>
                {categories.map((category, index) => 
                <CategoryChoice pickUpCategory={() => pickUpCategory(category)} 
                                category={category} key={index} categoryChoice={categoryChoice}/>)}
            </Row>
            <div className="zoom-button transition">
            <Button onClick={chooseCategory}>Next</Button>
            </div>
        </Container>
    );
};
 
export default Categories;
