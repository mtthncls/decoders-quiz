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
                <h1>Step 2/2: Numbers of questions & Difficulties</h1>
            </header>
            <div className="card-support">
            <Row>
                <Col sm="12">
                    <h3>Second, please select the number of questions you want to answer</h3>
                </Col>
                {numberOfQuestions.map((numberOfQuestion, index) => <Col sm="12" md="4"><NumberOfQuestionsButton numberOfQuestion={numberOfQuestion}
                                                                                              key={index}
                                                                                              numberOfQuestionsChoice={numberOfQuestionsChoice} /></Col>)}
                
            </Row>
            <Row>
                <Col sm="12">
                    <h3>and choose your difficulty</h3>
                </Col>
                {difficulties.map((difficulty, index) => <Col sm="12" md="4"><DifficultyButton difficulty={difficulty} 
                                                                           key={index}
                                                                           DifficultiesChoice={DifficultiesChoice}/></Col>)}
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

