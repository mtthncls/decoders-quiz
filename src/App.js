import React, { Component } from 'react';
import './App.css';
import Question from './Components/Question'
      
import ArticleSetChoice from './Components/ArticleSetChoice';
import ArticlesRecap from './Components/ArticlesRecap';

class App extends Component {
  constructor(){
    super()
      this.state = { 
        currentNewsArticle : {},
        preferredNewsArticles : []
 };
      this.memorizeArticle = this.memorizeArticle.bind(this)
};

/*This method allow us to add elements from API in the array, it check if the array is empty,
and create a new one to add objects at the next test (method calls) */

memorizeArticle(){
  this.setState(function(prevState){
    return {
     preferredNewsArticles : this.state.preferredNewsArticles.length === 0 ?
     [this.state.currentNewsArticle] : [...prevState.preferredNewsArticles, this.state.currentNewsArticle]};
});
};

componentDidMount(){
  fetch("https://newsapi.org/v2/everything?q=trup&from=2019-03-16&sortBy=publishedAt&apiKey=8ff3d2c7ecb44abaa9d1db3eae9dfcc8")
      .then(response => response.json())
      .then(responseInJson => this.setState({currentNewsArticle : responseInJson.articles[0]}))};

  render() {
    return (
      <div className="App">
        <Question/>
        <ArticleSetChoice currentArticle={this.state} addCurrentArticle={this.memorizeArticle}/>
        <ArticlesRecap articlesToRecap={this.state.preferredNewsArticles}/>
      </div>
    );
  };
};

export default App;

