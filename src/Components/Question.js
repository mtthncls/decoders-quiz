import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./Question.css";

const Question = ({ questions }) => {
    // array using the shuffle function
    const array = shuffle([questions.correct_answer, questions.incorrect_answers[0], questions.incorrect_answers[1], questions.incorrect_answers[2]])
        return (
                       
            <Container>
                <header className="appHeader">
                    <p>Question</p>
                    <p className="categoryHeader">{questions.category}</p>
                    <p className="questionHeader">{questions.question}</p>
                </header>
                <Row>
                    <Col><Button outline color="primary" className="test">{array[0]}</Button></Col>
                    <Col><Button outline color="primary">{array[1]}</Button></Col>
                </Row>
                <Row>
                    <Col><Button outline color="primary">{array[2]}</Button></Col>
                    <Col><Button outline color="primary">{array[3]}</Button></Col>
                </Row>
            </Container>
        );
    }


    // function allowing the randomization of the answer
    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
      
        
        while (0 !== currentIndex) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // swap it with the current element:
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array
      }

export default Question;
