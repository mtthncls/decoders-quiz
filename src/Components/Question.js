import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./Question.css";

//Template object for global question data from API

const Question = ({ question, setAnswerStatus, defineButtonColor, isButtonDisabled }) => {
    return (
        <Container>
            <header className="appHeader">
                <p>Question #1 in</p>
                <p className="categoryHeader">{question.category}</p>
                <p className="questionHeader">{question.question.replace(/&quot;|&#039;/g, "'")
                                                                .replace(/&rdquo;|&ldquo;/g, "\"")
                                                                .replace(/&eacute;/g, "é")
                                                                .replace(/&deg;/g, "°")
                                                                .replace(/&pipeline;/g, "Π")
                                                                .replace(/&amp;/g, "&")
                                                                .replace(/&hellip;/g, "...")}</p>
            </header>
            <Row>
                <Col><Button color={defineButtonColor(0)}
                    onClick={() => setAnswerStatus(question.answers[0], 0)}
                    disabled={isButtonDisabled}>{question.answers[0].text.replace(/&quot;|&#039;/g, "'")
                                                                        .replace(/&rdquo;|&ldquo;/g, "\"")
                                                                        .replace(/&eacute;/g, "é")
                                                                        .replace(/&deg;/g, "°")
                                                                        .replace(/&pipeline;/g, "Π")
                                                                        .replace(/&amp;/g, "&")
                                                                        .replace(/&hellip;/g, "...")}</Button></Col>
                <Col><Button color={defineButtonColor(1)}
                    onClick={() => setAnswerStatus(question.answers[1], 1)}
                    disabled={isButtonDisabled}>{question.answers[1].text.replace(/&quot;|&#039;/g, "'")
                                                                        .replace(/&rdquo;|&ldquo;/g, "\"")
                                                                        .replace(/&eacute;/g, "é")
                                                                        .replace(/&deg;/g, "°")
                                                                        .replace(/&pipeline;/g, "Π")
                                                                        .replace(/&amp;/g, "&")
                                                                        .replace(/&hellip;/g, "...")}</Button></Col>
            </Row>
            <Row>
                <Col><Button color={defineButtonColor(2)}
                    onClick={() => setAnswerStatus(question.answers[2], 2)}
                    disabled={isButtonDisabled}>{question.answers[2].text.replace(/&quot;|&#039;/g, "'")
                                                                        .replace(/&rdquo;|&ldquo;/g, "\"")
                                                                        .replace(/&eacute;/g, "é")
                                                                        .replace(/&deg;/g, "°")
                                                                        .replace(/&pipeline;/g, "Π")
                                                                        .replace(/&amp;/g, "&")
                                                                        .replace(/&hellip;/g, "...")}</Button></Col>
                <Col><Button color={defineButtonColor(3)}
                    onClick={() => setAnswerStatus(question.answers[3], 3)}
                    disabled={isButtonDisabled}>{question.answers[3].text.replace(/&quot;|&#039;/g, "'")
                                                                        .replace(/&rdquo;|&ldquo;/g, "\"")
                                                                        .replace(/&eacute;/g, "é")
                                                                        .replace(/&deg;/g, "°")
                                                                        .replace(/&pipeline;/g, "Π")
                                                                        .replace(/&amp;/g, "&")
                                                                        .replace(/&hellip;/g, "...")}</Button></Col>
            </Row>

        </Container>
    );
}

export default Question;