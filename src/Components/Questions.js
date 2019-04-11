import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./Question.css";

const Questions = ({ questions }) => {
        return (
            <Container>
                <header className="appHeader">
                    <p>Question</p>
                    <p className="categoryHeader">{questions.category}</p>
                    <p className="questionHeader">{questions.question}</p>
                </header>
                <Row>
                    <Col><Button outline color="primary" className="test">{questions.correct_answer}</Button></Col>
                    <Col><Button outline color="primary">{questions.incorrect_answers[0]}</Button></Col>
                </Row>
                <Row>
                    <Col><Button outline color="primary">{questions.incorrect_answers[1]}</Button></Col>
                    <Col><Button outline color="primary">{questions.incorrect_answers[2]}</Button></Col>
                </Row>
            </Container>
        );
    }


export default Questions;