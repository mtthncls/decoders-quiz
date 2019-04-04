import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const questions = {
    category: "Sports",
    question: "Which French F1 pilot has won 4 World Championships ?",
    correct_answer: "Alain \"Le Professeur\" Prost",
    incorrect_answers: [
        "Oliver \"Le Chat Noir\" Panis",
        "Jean \"d'Avignon\" Alesi",
        "Henri \"Pesca\" Pescarolo"
    ]
}


export default class Questions extends React.Component {
    render() {
        return (
            <Container>
                <header className="appHeader">
                    <p>Question #1 in</p>
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
}

