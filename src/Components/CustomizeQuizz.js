import React from 'react';
import { Button, Container, Row } from 'reactstrap';
import "./CustomizeQuizz.css";
import NumberOfQuestionsButton from './NumberOfQuestionsButton'

const CustomizeQuizz = ({QuizzCustomize, numberOfQuestions, NumberOfQuestionsChoice}) => {
    return(
        <Container>
            <header>
                <h1 className="titlePage">Customize your quizz</h1>
            </header>
            <Row>
                {numberOfQuestions.map((numberOfQuestion, index) => <NumberOfQuestionsButton numberOfQuestion={numberOfQuestion}
                                                                                              key={index}
                                                                                              NumberOfQuestionsChoice={NumberOfQuestionsChoice} />)}
            </Row>
            <Button onClick={QuizzCustomize}>Next</Button>  
        </Container>
    )
}



export default CustomizeQuizz;

