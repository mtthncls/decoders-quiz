import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import CategoryChoice from './CategoryChoice';
import '../App.css';

const Categories = ({ nameRegistered, categories, pickUpCategory, categoryChoice, chooseCategory, catTitle }) => {
    return (
        <Container>
            <header className="card-support">
                <h1>Step 1/2 : Categories</h1>
            </header>
            <div className="card-support">
                <h3>Hi <span className="username">{nameRegistered}</span> ! <br />
                    First, you have to choose your category...</h3>
                <Row>
                    {categories.map((category, index) =>
                        <CategoryChoice pickUpCategory={() => pickUpCategory(category, index)}
                            category={category} key={index} categoryChoice={categoryChoice}
                            specificButton={index} catTitle={catTitle} />)}
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <div className="zoom-button transition">
                            <Button onClick={chooseCategory}>Next</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Categories;
