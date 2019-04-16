import React, { Component } from 'react';
import './App.css';
import Question from './Components/Question'

import ArticleSetChoice from './Components/ArticleSetChoice';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentNewsArticle: {}, //ArticleSetChoice component
      preferredNewsArticles: [], //ArticleSetChoice component
      answered: false, //Question component : has one button been clicked or not ?
      answerStatus: false, //Question component : is the answer true or false ?
      buttonClicked: "",   //Question component : which button has been clicked ?
      isButtonDisabled: false, //Question component : button clickable or not
      question: {
        category: "Currency",
        question: "What was the maximum value the Bitcoin reached ?",
        answers: this.randomizeAnswersDisplay([
          { text: "19 500 $", correct: true },
          { text: "176 467 $", correct: false },
          { text: "9099 $", correct: false },
          { text: "1290 $", correct: false }
        ]), //Question component : elements to create the question and the answers
      }
    };
    this.memorizeArticle = this.memorizeArticle.bind(this)
  };

  //determine if the answer of clicked button is correct or incorrect and modify state accordingly
  isCorrectAnswer = (answer, buttonIndex) => {
    this.setState({ answerStatus: answer.correct, answered: true, buttonClicked: buttonIndex, isButtonDisabled: true })
  }

  //change color of clicked button according to correctness of the answer and the button clicked
  defineButtonColor = (buttonIndex) => {
    if (this.state.buttonClicked === buttonIndex
      && this.state.answered
      && this.state.answerStatus) {
      return "success";
    }
    else if (this.state.buttonClicked === buttonIndex
      && this.state.answered
      && !this.state.answerStatus) {
      return "danger";
    }
    else if (
      this.state.buttonClicked !== buttonIndex
      && this.state.answered
      && !this.state.answerStatus
      && this.state.question.answers[buttonIndex].correct) {
      return "success"
    }
    else if (
      this.state.buttonClicked !== buttonIndex
      && this.state.answered
      && !this.state.question.answers[buttonIndex].correct) {
      return "secondary"
    }
    return ""
  }
  //to randomize the order of apperance of the answers on screen
  randomizeAnswersDisplay = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array
  }

  /*This method allow us to add elements from API in the array, it check if the array is empty,
and create a new one to add objects at the next test (method calls) */

  memorizeArticle() {
    this.setState(function (prevState) {
      return {
        preferredNewsArticles: this.state.preferredNewsArticles.length === 0 ?
          [this.state.currentNewsArticle] : [...prevState.preferredNewsArticles, this.state.currentNewsArticle]
      };
    });
  };

  componentDidMount() {
    //Ces trois const récupèrent l'année/mois/et le jour courant
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const date = new Date().getDate()

    fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=${year}-${month}-${date}&sortBy=publishedAt&apiKey=8ff3d2c7ecb44abaa9d1db3eae9dfcc8`)
      .then(response => response.json())
      .then(responseInJson => this.setState({ currentNewsArticle: responseInJson.articles[0] }));
  };

  render() {
    return (
      <div className="App">
        <Question questionState={this.state} isCorrectAnswer={this.isCorrectAnswer} defineButtonColor={this.defineButtonColor} />
        <ArticleSetChoice currentArticle={this.state} addCurrentArticle={this.memorizeArticle} />
      </div>
    );
  };
};

export default App;