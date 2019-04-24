import React from 'react';
import { Button, Container, Row } from 'reactstrap';
import CategoryChoice from './Components/CategoryChoice';

const Categories = ({categories, pickUpCategory}) => {
    return ( 
        <Container>
            <header>
                <h1>Choose a theme</h1>
            </header>
            <Row>
                {categories.map(category => <CategoryChoice pickUpCategory={() => pickUpCategory(category)} category={category}/>)}
            </Row>
            <Button>Next</Button>
        </Container>
    );
}
 
export default Categories;