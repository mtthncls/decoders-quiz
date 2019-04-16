import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./Question.css";

//Template object for global question data from API

const Question = ({state, isCorrectAnswer, defineButtonColor}) => {
    return ( 
        <Container>
                <header className="appHeader">
                    <p>Question #1 in</p>
                    <p className="categoryHeader">{state.question.category}</p>
                    <p className="questionHeader">{state.question.question}</p>
                </header>
                <Row>
                    <Col><Button color={defineButtonColor(0)} outline onClick={() => isCorrectAnswer(state.question.answers[0], 0)} disabled={state.isButtonDisabled}>{state.question.answers[0].text}</Button></Col>
                    <Col><Button color={defineButtonColor(1)} outline onClick={() => isCorrectAnswer(state.question.answers[1], 1)} disabled={state.isButtonDisabled}>{state.question.answers[1].text}</Button></Col>
                </Row>
                <Row>
                    <Col><Button color={defineButtonColor(2)} outline onClick={() => isCorrectAnswer(state.question.answers[2], 2)} disabled={state.isButtonDisabled}>{state.question.answers[2].text}</Button></Col>
                    <Col><Button color={defineButtonColor(3)} outline onClick={() => isCorrectAnswer(state.question.answers[3], 3)} disabled={state.isButtonDisabled}>{state.question.answers[3].text}</Button></Col>
                </Row>
                {state.isButtonDisabled && <Button>Next</Button>}
            </Container>
     );
}
 
export default Question;