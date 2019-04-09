import React, { Component } from 'react';
import './App.css';
import Questions from './Components/Questions'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }
  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then(response  =>  response.json())
      .then(data  => {
        this.setState({
          questions: data.results[0],
        });
    });
}
  render() {
    return (
      <Questions questions={this.state.questions} />
    );
  }
}

export default App;
