import React from 'react';
import { Col, Button } from 'reactstrap';

const NumberOfQuestionsButton = ({numberOfQuestion, numberOfQuestionsChoice, choosenNumberOfQuestions}) => {
    return ( 
        <Col className="zoom-button custom" >
            <Button className={choosenNumberOfQuestions === numberOfQuestion ? "category-chosen" : ""} 
                    onClick={() => numberOfQuestionsChoice(numberOfQuestion)}>{numberOfQuestion}</Button>
        </Col>
     );
}

export default NumberOfQuestionsButton; 