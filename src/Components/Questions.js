import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const Questions = ({ questions }) => {
        return (
            <Container>
                <header className="appHeader">
                    <p>Question # in</p>
                    <p className="categoryHeader">{questions.category}</p>
                    <p className="questionHeader">{questions.question}</p>
                </header>
                <Row>
                    <Col><Button outline color="primary" className="test">{questions.correct_answer}</Button></Col>
                    <Col><Button outline color="primary">{questions.incorrect_answers}</Button></Col>
                </Row>
                <Row>
                    <Col><Button outline color="primary">{questions.incorrect_answers}</Button></Col>
                    <Col><Button outline color="primary">{questions.incorrect_answers}</Button></Col>
                </Row>
            </Container>
        );
    }





export default Questions;