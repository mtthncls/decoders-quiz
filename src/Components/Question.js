import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./Question.css";

//Template object for global question data from API

const Question = ({ questionState, isCorrectAnswer, defineButtonColor }) => {
    return (
        <Container>
            <header className="appHeader">
                <p>Question #1 in</p>
                <p className="categoryHeader">{questionState.question.category}</p>
                <p className="questionHeader">{questionState.question.question}</p>
            </header>
            <Row>
                <Col><Button color={defineButtonColor(0)}
                    outline onClick={() => isCorrectAnswer(questionState.question.answers[0], 0)}
                    disabled={questionState.isButtonDisabled}>{questionState.question.answers[0].text}</Button></Col>
                <Col><Button color={defineButtonColor(1)}
                    outline onClick={() => isCorrectAnswer(questionState.question.answers[1], 1)}
                    disabled={questionState.isButtonDisabled}>{questionState.question.answers[1].text}</Button></Col>
            </Row>
            <Row>
                <Col><Button color={defineButtonColor(2)}
                    outline onClick={() => isCorrectAnswer(questionState.question.answers[2], 2)}
                    disabled={questionState.isButtonDisabled}>{questionState.question.answers[2].text}</Button></Col>
                <Col><Button color={defineButtonColor(3)}
                    outline onClick={() => isCorrectAnswer(questionState.question.answers[3], 3)}
                    disabled={questionState.isButtonDisabled}>{questionState.question.answers[3].text}</Button></Col>
            </Row>
            {questionState.isButtonDisabled && <Button>Next</Button>}
        </Container>
    );
}

export default Question;