import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./Question.css";

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

randomizeAnswersDisplay = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex]= array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array
}
  

/*const Question = ({ questions }) => {
    // array using the shuffle function
    const array = shuffle([{text: questions.correct_answer, correct: true},
                           {text: questions.incorrect_answers[0], correct: false}, 
                           {text: questions.incorrect_answers[1], correct: false}, 
                           {text: questions.incorrect_answers[2], correct: false}])*/
render() {
        return (
                       
            <Container>
                <header className="appHeader">
                    <p>Question</p>
                    <p className="categoryHeader">{this.props.question.category}</p>
                    <p className="questionHeader">{this.props.question.question}</p>
                </header> 
                <Row>
                    <Col><Button color={this.defineButtonColor(0)} outline onClick={()=> this.isCorrectAnswer(this.props.question.answers[0], 0)}>{this.props.question.answers[0].text}</Button></Col>
                    <Col><Button color={this.defineButtonColor(1)} outline onClick={()=> this.isCorrectAnswer(this.props.question.answers[1], 1)}>{this.props.question.answers[1].text}</Button></Col>
                </Row>
                <Row>
                    <Col><Button color={this.defineButtonColor(2)} outline onClick={()=> this.isCorrectAnswer(this.props.question.answers[2], 2)}>{this.props.question.answers[2].text}</Button></Col>
                    <Col><Button color={this.defineButtonColor(3)} outline onClick={()=> this.isCorrectAnswer(this.props.question.answers[3], 3)}>{this.props.question.answers[3].text}</Button></Col>
                </Row>
            </Container>
        );
    }
}
