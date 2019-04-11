import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./Question.css";

//Template object for global question data from API
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
 


export default class Question extends React.Component {
    constructor(){
        super()
        this.state = {
           answered : false, //has one button been clicked or not ?
           answerStatus : false, //is the answer true or false ?
           buttonClicked : "",   //which button has been clicked ?          
        };
    }
    //determine if the answer of clicked button is correct or incorrect and modify state accordingly
    isCorrectAnswer = (answer, buttonIndex) => {
        this.setState({answerStatus : answer.correct, answered : true, buttonClicked : buttonIndex })     
    }
    
    //change color of clicked button according to correctness of the answer in the button
   defineButtonColor = (buttonIndex) => {
        if(this.state.buttonClicked ===  buttonIndex && this.state.answered === true && this.state.answerStatus === true){
            return "success";   
        }
        else if (this.state.buttonClicked === buttonIndex && this.state.answered === true && this.state.answerStatus === false){
            return "danger";
        }
        return  ""

    }

    render() {                                 
           
        return (
                       
            <Container>
                <header className="appHeader">
                    <p>Question #1 in</p>
                    <p className="categoryHeader">{test.category}</p>
                    <p className="questionHeader">{test.question}</p>
                </header>
                <Row>
                    <Col><Button color={this.defineButtonColor(0)} outline onClick={()=> this.isCorrectAnswer(test.answers[0], 0)}>{test.answers[0].text}</Button></Col>
                    <Col><Button color={this.defineButtonColor(1)} outline onClick={()=> this.isCorrectAnswer(test.answers[1], 1)}>{test.answers[1].text}</Button></Col>
                </Row>
                <Row>
                    <Col><Button color={this.defineButtonColor(2)} outline onClick={()=> this.isCorrectAnswer(test.answers[2], 2)}>{test.answers[2].text}</Button></Col>
                    <Col><Button color={this.defineButtonColor(3)} outline onClick={()=> this.isCorrectAnswer(test.answers[3], 3)}>{test.answers[3].text}</Button></Col>
                </Row>
            </Container>

        );
    }
}
