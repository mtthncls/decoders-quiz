import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { throws } from 'assert';
import { generateKeyPair } from 'crypto';


const test = {
    category: "Sports",
    question: "Which French F1 pilot has won 4 World Championships ?",
    answers: [
    {text: "Alain \"Le Professeur\" Prost", correct : true},
    {text: "Oliver \"Le Chat Noir\" Panis", correct : false},
    {text: "Jean \"d'Avignon\" Alesi", correct : false}, 
    {text: "Henri \"Pesca\" Pescarolo", correct : false}
    ]
}   


export default class Questions extends React.Component {
    render() {
        return (
            <Container>
                <header className="appHeader">
                    <p>Question #1 in</p>
                    <p className="categoryHeader">{test.category}</p>
                    <p className="questionHeader">{test.question}</p>
                </header>
                <Row>
                    <Col><Button outline color="primary">{test.answers[0].text}</Button></Col>
                    <Col><Button outline color="primary">{test.answers[1].text}</Button></Col>
                </Row>
                <Row>
                    <Col><Button outline color="primary">{test.answers[2].text}</Button></Col>
                    <Col><Button outline color="primary">{test.answers[3].text}</Button></Col>
                </Row>
            </Container>

        );
    }
}

