import React from 'react';
import { Button,Col} from 'reactstrap';

const CategoryChoice = ({category, pickUpCategory}) => {
    return(
        <div>
            <Col>
                <Button onClick={pickUpCategory} >{category}</Button>
            </Col>
        </div>
    )
}



export default CategoryChoice;