import React, { Component } from 'react';
import './App.css';
import News from "./Components/News";
import ArticleChoice from './Components/Bottom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <News/>
       <ArticleChoice />
      </div>
    );
  }
}

export default App;
