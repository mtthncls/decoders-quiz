import React from 'react';
import { Button, Col } from 'reactstrap';
import '../App.css';

const CategoryChoice = ({ category, pickUpCategory, catTitle }) => {
    return (
        <Col xs={6} md={6} lg={2}>
            <div className="zoom-button category">
                <Button className={catTitle === category ? "category-chosen" : ""} onClick={pickUpCategory}>{category}</Button>
            </div>
        </Col>
    )
}

export default CategoryChoice;
