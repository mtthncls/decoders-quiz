import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Question from './Components/Question';
import ArticleSetChoice from './Components/ArticleSetChoice';
import './App.css';
import ArticlesRecap from './Components/ArticlesRecap';


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentNewsArticle: {}, //ArticleSetChoice component
      preferredNewsArticles: [], //ArticleSetChoice component
      isQuestionAnswered: false, //Question component : has one button been clicked or not ?
      isAnswerCorrect: false, //Question component : is the answer true or false ?
      buttonClicked: "",   //Question component : which button has been clicked ?
      isButtonDisabled: false, //Question component : button clickable or not
      isQuestionDisplayed: true,
      questions: [],
      currentQuestionID: 0,
      currentArticleID: 0,
      isQuestionLoading: true,
      questionsCategory: 21,
      numberOfQuestions: 10
    };
  };

  componentDidMount() {

    // method for API call
    fetch(`https://opentdb.com/api.php?amount=${this.state.numberOfQuestions}&category=
           ${this.state.questionsCategory}&difficulty=medium&type=multiple`)
      .then(response => response.json())
      .then(data => {
        const apiQuestions = data.results
        const questions = []
        for (let i = 0; i < apiQuestions.length; i++) {
          const question = {
            category: apiQuestions[i].category,
            question: apiQuestions[i].question,
            answers: this.randomizeAnswersDisplay([
              { text: apiQuestions[i].correct_answer, correct: true },
              { text: apiQuestions[i].incorrect_answers[0], correct: false },
              { text: apiQuestions[i].incorrect_answers[1], correct: false },
              { text: apiQuestions[i].incorrect_answers[2], correct: false }
            ])
          };
          questions.push(question)
        };

        this.setState({
          questions: questions,
          isQuestionLoading: false
        });
      });
  };

  //to randomize the order of apperance of the answers on screen
  randomizeAnswersDisplay = (answers) => {
    let currentIndex = answers.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = answers[currentIndex];
      answers[currentIndex] = answers[randomIndex];
      answers[randomIndex] = temporaryValue;
    };
    return answers
  };

  // method for display the loading message
  displayLoading = () => {
    if (this.state.isQuestionLoading) {
      return (
        <p className="loadText">loading...</p>
      )
    };
  };

  // method for display the question component 
  displayQuestions = () => {
    if (this.state.questions.length > 0) {
      return (
        <div>
          <Question question={this.state.questions[this.state.currentQuestionID]}
            isButtonDisabled={this.state.isButtonDisabled}
            setAnswerStatus={this.setAnswerStatus}
            defineButtonColor={this.defineButtonColor}
            currentQuestionID={this.state.currentQuestionID} />
        </div>
      )
    };
  };

  //determine if the answer of clicked button is correct or incorrect and modify state accordingly
  setAnswerStatus = (answer, buttonIndex) => {
    this.setState({
      isAnswerCorrect: answer.correct, isQuestionAnswered: true,
      buttonClicked: buttonIndex, isButtonDisabled: true
    })
  };

  //change color of clicked button according to correctness of the answer and the button clicked
  defineButtonColor = (buttonIndex) => {
    if (this.state.questions !== []) {
      if (!this.state.isQuestionAnswered) {
        return "secondary";
      }
      else if (this.state.buttonClicked === buttonIndex
        && this.state.isQuestionAnswered
        && this.state.isAnswerCorrect) {
        return "success";
      }
      else if (this.state.buttonClicked === buttonIndex
        && this.state.isQuestionAnswered
        && !this.state.isAnswerCorrect) {
        return "danger";
      }
      else if (
        this.state.buttonClicked !== buttonIndex
        && this.state.isQuestionAnswered
        && !this.state.isAnswerCorrect
        && this.state.questions[this.state.currentQuestionID].answers[buttonIndex].correct) {
        return "success";
      }
      else if (
        this.state.buttonClicked !== buttonIndex
        && this.state.isQuestionAnswered
        && !this.state.questions[this.state.currentQuestionID].answers[buttonIndex].correct) {
        return "secondary";
      }
      return "";
    };
  };

  //allows to display article selection page after clicking 'next' button
  triggerArticleChoiceDisplay = () => {
    this.setState({ isQuestionDisplayed: false, isButtonDisabled: false });

    //These three const get the current Date, Month, and Date
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const date = new Date().getDate();

    fetch(`https://newsapi.org/v2/everything?q=${this.state.questions[0].category}
           &from=${year}-${month}-${date}&sortBy=publishedAt&apiKey=8ff3d2c7ecb44abaa9d1db3eae9dfcc8`)
      .then(response => response.json())
      .then(responseInJson => this.setState({ currentNewsArticle: responseInJson.articles }));
  };

  /*This method allow us to add elements from API in the array, it check if the array is empty,
  and create a new one to add objects at the next test (method calls) and go to the next question when click on yes button */
  memorizeArticle = () => {
    this.setState(function (prevState) {
      return {
        preferredNewsArticles: this.state.preferredNewsArticles.length === 0
          ? [this.state.currentNewsArticle[this.state.currentArticleID]]
          : [...prevState.preferredNewsArticles, this.state.currentNewsArticle[this.state.currentArticleID]]
      };
    });
    this.setState({
      isQuestionAnswered: false, isQuestionDisplayed: true,
      currentQuestionID: this.state.currentQuestionID + 1,
      currentArticleID: this.state.currentArticleID + 1
    })
  };
  /*go to the next question when click on No button*/
  nextQuestion = () => {
    this.setState({
      isQuestionAnswered: false, isQuestionDisplayed: true, currentQuestionID: this.state.currentQuestionID + 1,
      currentArticleID: this.state.currentArticleID + 1
    })
  };


  render() {
    return (
      <div className="App">
        {this.displayLoading()}
        {this.state.isQuestionDisplayed && this.displayQuestions()}
        {!this.state.isQuestionDisplayed && this.state.currentNewsArticle.length > 0
          && <ArticleSetChoice currentArticle={this.state.currentNewsArticle[this.state.currentArticleID]}
            addCurrentArticle={this.memorizeArticle}
            nextQuestion={this.nextQuestion} />}

        {this.state.isButtonDisabled && <Button onClick={this.triggerArticleChoiceDisplay}>Next</Button>}
        <ArticlesRecap articlesToRecap={this.state.preferredNewsArticles} />
      </div>
    );
  };
};

export default App;