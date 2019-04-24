import React from 'react';
import { Button,Col} from 'reactstrap';

const CategoryChoice = ({category, pickUpCategory}) => {
    return(
        <Col lg={2}>
            <div>
                <Button onClick={pickUpCategory}>{category}</Button>
            </div>
        </Col>
    )
}

export default CategoryChoice;

