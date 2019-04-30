import React from 'react';
import { Col, Button } from 'reactstrap';

const NumberOfQuestionsButton = ({numberOfQuestion, numberOfQuestionsChoice}) => {
    return ( 
        <Col className="zoom-button custom" >
            <Button onClick={() => numberOfQuestionsChoice(numberOfQuestion)}>{numberOfQuestion}</Button>
        </Col>
     );
}

export default NumberOfQuestionsButton; 