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
          questions: data.results,
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
          <Questions questions = {this.state.questions[0]} />
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


/*
  render() {
      return (
    <div> 
      {/*si state question est vide, afficher loading, sinon afficher question}
      {this.setState.questions = [] ? "Loading" : <Questions questions = {this.state.questions} />}
    </div>
    );
  }
}*/

export default App;