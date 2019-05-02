import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

//Template object for global question data from API

const Question = ({ currentQuestionID, question, setAnswerStatus, defineButtonColor, isButtonDisabled, correctSpecialCharacters }) => {
    return (
        <Container>
            <header className="card-support head">
                <p className="question-number">Question #{currentQuestionID + 1}</p>
                <h2>{question.category}</h2>
                <h3 >{correctSpecialCharacters(question.question)}</h3>
            </header>
            <main className="card-support">
                <Row>
                    <Col className="button-answer" >
                        <Button color={defineButtonColor(0)}
                            onClick={() => setAnswerStatus(question.answers[0], 0)}
                            disabled={isButtonDisabled}>{correctSpecialCharacters(question.answers[0].text)}</Button>
                    </Col>
                    <Col className="button-answer">
                        <Button color={defineButtonColor(1)}
                            onClick={() => setAnswerStatus(question.answers[1], 1)}
                            disabled={isButtonDisabled}>{correctSpecialCharacters(question.answers[1].text)}</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="button-answer">
                        <Button color={defineButtonColor(2)}
                            onClick={() => setAnswerStatus(question.answers[2], 2)}
                            disabled={isButtonDisabled}>{correctSpecialCharacters(question.answers[2].text)}</Button>
                    </Col>
                    <Col className="button-answer">
                        <Button color={defineButtonColor(3)}
                            onClick={() => setAnswerStatus(question.answers[3], 3)}
                            disabled={isButtonDisabled}>{correctSpecialCharacters(question.answers[3].text)}</Button>
                    </Col>
                </Row>
            </main>
        </Container>
    )
};

export default Question;

