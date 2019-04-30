import React from 'react';
import { Col, Button } from 'reactstrap';

const DifficultyButton = ({difficulty, DifficultiesChoice}) => {
    return ( 
        <Col className="zoom-button custom" >
            <Button onClick={() => DifficultiesChoice(difficulty)}>{difficulty}</Button>
        </Col>
     );
}
 
export default DifficultyButton;