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
        const questions = data.results
        
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
    if (this.state.questions >= [0]) {
      return (
        <div>
          <Question question = {this.state.questions[0]} />
        </div>
      )
    }
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


