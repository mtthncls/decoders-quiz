import React from 'react';
import { Button, Container, Row } from 'reactstrap';
import CategoryChoice from './Components/CategoryChoice';
import './App.css';

const Categories = ({categories, pickUpCategory, categoryChoice, chooseCategory, test}) => {
    return ( 
        <Container>
            <header className="card-support">
                <h1>Step 1/2 : Category</h1>
            </header>
            <div className="card-support">
            <h3>First, you have to choose your category...</h3>
            <Row>
                {categories.map((category, index) => 
                <CategoryChoice pickUpCategory={() => pickUpCategory(category, index)} 
                                category={category} key={index} categoryChoice={categoryChoice}
                                specificButton={index} test={test}/>)}
            </Row>
            <div className="zoom-button transition">
            <Button onClick={chooseCategory}>Next</Button>
            </div>
            </div>
        </Container>
    );
};
 
export default Categories;
