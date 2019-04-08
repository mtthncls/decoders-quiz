import React, { Component } from 'react';
import './App.css';
import News from "./Components/News";
import ArticleChoice from './Components/Bottom'
import Memorize from './Components/MemorizeChoice';

class App extends Component {
  render() {
    return (
      <div className="App">
        <News/>
       <ArticleChoice />
       <Memorize />
      </div>
    );
  }
}

export default App;
