import React from 'react';
import { Button, Container, Col, Row } from 'reactstrap';

const CategoryChoice = ({}) => {
    return(
        <Container>
            <header>
                <h1>Choose a theme</h1>
            </header>
            <Row>
                <Col><Button>Category</Button></Col>
                <Col><Button>Category</Button></Col>
                <Col><Button>Category</Button></Col>
            </Row>
            <Button>Next</Button>
        </Container>
    )
}



export default CategoryChoice;