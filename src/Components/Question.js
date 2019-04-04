import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const questions = {
    question: "Which team won the FIFA World Cup in 2014 ?",
    answer1: "SPAIN",
    answer2: "FRANCE",
    answer3: "GERMANY",
    answer4: "BRASIL"
}


export default class Questions extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <div className="questionBox">
                    <Col><h2 className="question">{questions.question}</h2></Col>
                    </div>                       
                </Row>         
                <Row>   
                    <Col><Button outline color="primary">{questions.answer1}</Button></Col>
                    <Col><Button outline color="primary">{questions.answer2}</Button></Col>
                </Row>
                <Row>
                    <Col><Button outline color="primary">{questions.answer3}</Button></Col>
                    <Col><Button outline color="primary">{questions.answer4}</Button></Col>
                </Row>
            </Container>

        );
    }
}

