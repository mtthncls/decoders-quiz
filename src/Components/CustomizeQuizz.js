import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import "./CustomizeQuizz.css";
import NumberOfQuestionsButton from './NumberOfQuestionsButton'
import DifficultyButton from './DifficultyButtons';
import '../App.css';

const CustomizeQuizz = ({quizzcustomize, numberOfQuestions, numberOfQuestionsChoice, difficulties, DifficultiesChoice}) => {
    return(
        <Container>
            <header className="card-support">
                <h1>Step 2/2: Number of questions & Difficulty</h1>
            </header>
            <div className="card-support">
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
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                <div className="zoom-button transition">
                    <Button onClick={quizzcustomize}>Next</Button>
                </div>
                </Col>
            </Row>
            </div>  
        </Container>
    )
}



export default CustomizeQuizz;

