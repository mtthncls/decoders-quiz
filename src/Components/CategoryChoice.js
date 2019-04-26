import React from 'react';
import { Button,Col} from 'reactstrap';
import '../App.css';

const CategoryChoice = ({category, pickUpCategory, categoryChoiced}) => {
    return(
        <Col  md={6} lg={2}>
            <div className="zoom-button category">
                <Button color={categoryChoiced && "success"} onClick={pickUpCategory}>{category}</Button>
            </div>
        </Col>
    )
}

export default CategoryChoice;

