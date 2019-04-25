import React from 'react';
import { Button, Container, Row } from 'reactstrap';
import "./CustomizeQuizz.css";
import NumberOfQuestionsButton from './NumberOfQuestionsButton'

const CustomizeQuizz = ({quizzcustomize, numberOfQuestions, numberOfQuestionsChoice}) => {
    return(
        <Container>
            <header>
                <h1 className="titlePage">Customize your quizz</h1>
            </header>
            <Row>
                {numberOfQuestions.map((numberOfQuestion, index) => <NumberOfQuestionsButton numberOfQuestion={numberOfQuestion}
                                                                                              key={index}
                                                                                              numberOfQuestionsChoice={numberOfQuestionsChoice} />)}
            </Row>
            <Button onClick={quizzcustomize}>Next</Button>  
        </Container>
    )
}



export default CustomizeQuizz;

