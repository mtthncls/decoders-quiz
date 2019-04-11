import React, { Component } from 'react';
import './App.css';
import RenderApiInfos from "./Components/RenderApiInfos";
import ArticleChoice from './Components/ArticleChoice'

class App extends Component {
  constructor(){
    super()
      this.state = { 
        articleInformationsFromNewsApi : [],
        transferArticleToRecapComponent : []
 }
      this.memorizeArticle = this.memorizeArticle.bind(this)
}

/*This method allow us to add elements from API in the array, it check if the array is empty,
and create a new one to add objects at the next test (method calls) */

memorizeArticle(){
  this.setState(function(prevState){ 
   console.log(prevState)
    return {
     transferArticleToRecapComponent : this.state.transferArticleToRecapComponent.length === 0 ?
     [this.state.articleInformationsFromNewsApi] : [...prevState.transferArticleToRecapComponent, this.state.articleInformationsFromNewsApi] 
   }
});
}

componentDidMount(){
  fetch("https://newsapi.org/v2/everything?q=sport&from=2019-03-11&sortBy=publishedAt&pageSize=1&apiKey=8ff3d2c7ecb44abaa9d1db3eae9dfcc8")
      .then(response => response.json())
      .then(responseInJson => this.setState({articleInformationsFromNewsApi : responseInJson.articles[0]}))
}
        

  render() {
    return (
      <div className="App">
      {/* News must display data gets from News API */}
       <RenderApiInfos apiInfos={this.state.articleInformationsFromNewsApi}/>
      {/* Props transfers the method to ride up child information up to here */}
       <ArticleChoice articleToMemorize={this.memorizeArticle}/>
      </div>
    );
  }
}

export default App;