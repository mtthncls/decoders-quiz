import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./Question.css";

//Template object for global question data from API
const question = {
    category: "Sports",
    question: "Which French F1 pilot has won 4 World Championships ?",
    answers: shuffle([
    {text: "Alain \"Le Professeur\" Prost", correct : true},
    {text: "Oliver \"Le Chat Noir\" Panis", correct : false},
    {text: "Jean \"d'Avignon\" Alesi", correct : false}, 
    {text: "Henri \"Pesca\" Pescarolo", correct : false}
    ])
}
//to randomize the order of apperance of the answers on screen
function shuffle(array){
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
                    <p className="categoryHeader">{question.category}</p>
                    <p className="questionHeader">{question.question}</p>
                </header>
                <Row>
                    <Col><Button color={this.defineButtonColor(0)} outline onClick={()=> this.isCorrectAnswer(question.answers[0], 0)}>{question.answers[0].text}</Button></Col>
                    <Col><Button color={this.defineButtonColor(1)} outline onClick={()=> this.isCorrectAnswer(question.answers[1], 1)}>{question.answers[1].text}</Button></Col>
                </Row>
                <Row>
                    <Col><Button color={this.defineButtonColor(2)} outline onClick={()=> this.isCorrectAnswer(question.answers[2], 2)}>{question.answers[2].text}</Button></Col>
                    <Col><Button color={this.defineButtonColor(3)} outline onClick={()=> this.isCorrectAnswer(question.answers[3], 3)}>{question.answers[3].text}</Button></Col>
                </Row>
            </Container>

        );
    }
}
