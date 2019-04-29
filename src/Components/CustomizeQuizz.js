import React from 'react';
import { Button, Container, Row } from 'reactstrap';
import "./CustomizeQuizz.css";
import NumberOfQuestionsButton from './NumberOfQuestionsButton'
import DifficultyButton from './DifficultyButtons';

const CustomizeQuizz = ({quizzcustomize, numberOfQuestions, numberOfQuestionsChoice, difficulties, DifficultiesChoice}) => {
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
            <Row>
                {difficulties.map((difficulty, index) => <DifficultyButton difficulty={difficulty} 
                                                                           key={index}
                                                                           DifficultiesChoice={DifficultiesChoice}/>)}
            </Row>
            <Button onClick={quizzcustomize}>Next</Button>  
        </Container>
    )
}



export default CustomizeQuizz;

