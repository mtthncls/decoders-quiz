import React from 'react';
import { Col, Button } from 'reactstrap';

const NumberOfQuestionsButton = ({numberOfQuestion, NumberOfQuestionsChoice}) => {
    return ( 
        <Col>
            <Button onClick={() => NumberOfQuestionsChoice(numberOfQuestion)}>{numberOfQuestion}</Button>
        </Col>
     );
}

export default NumberOfQuestionsButton; 