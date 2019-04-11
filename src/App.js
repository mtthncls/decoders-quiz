import React, { Component } from 'react';
import './App.css';
import Questions from './Components/Questions'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      isLoading: true
    };
  }
  
  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then(response => response.json())
      .then(data => {
        this.setState({
          questions: data.results[0],
          isLoading: false
        });
      });
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <p className="loadText">loading...</p>
      )
    }
  }

  _displayQuestions() {
    if (this.state.questions !== undefined) {
      return (
        <div>
          <Questions questions = {this.state.questions} />
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