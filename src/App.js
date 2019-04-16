import React, { Component } from 'react';
import './App.css';
import Question from './Components/Question'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      isLoading: true
    };
  }
  
  // method for API call
  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then(response => response.json())
      .then(data => { 
        //transform questions
        const apiQuestions = data.results
        //créer un tableau 
        const questions = []
        for (let i=0 ; i < apiQuestions.length ; i++){         
          const question = {
            category : apiQuestions[i].category,
            question : apiQuestions[i].question,
            answers : [{text: apiQuestions[i].correct_answer, correct: true},
                       {text: apiQuestions[i].incorrect_answers[0], correct: false},
                       {text: apiQuestions[i].incorrect_answers[1], correct: false},
                       {text: apiQuestions[i].incorrect_answers[2], correct: false}
                      ]             
            };             
            questions.push(question)       
        }
        
        this.setState({
          questions: questions,
          isLoading: false
        });
      });
  }

  // method for display the loading message
  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <p className="loadText">loading...</p>
      )
    }
  }

  // method for display the question component 
  _displayQuestions() {
    if (this.state.questions.length > 0) {
      return (
        <div>
          <Question question = {this.state.questions[0]} />
        </div>
      )
    }
  }
  // method to randomize answers
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

  render() {
    return (
      <div>
        {this._displayLoading()}
        {this._displayQuestions()}
      </div>
    )
  }
}

export default App;


