import React from 'react';
import { Button,Col} from 'reactstrap';
import '../App.css';

const CategoryChoice = ({category, pickUpCategory, test }) => {
    return(
        <Col  md={6} lg={2}>
            <div className="zoom-button category">
                <Button className={test ? "TOTO" : ""} onClick={pickUpCategory}>{category}</Button>
            </div>
        </Col>
    )
}

export default CategoryChoice;

