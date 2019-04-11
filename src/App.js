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

 /*  Cette méthode permet d'ajouter dans notre tableau les éléments récupérer de l'API
             Elle regarde si le tableau est vide, et en crée un nouveau afin d'y ajouter les objets
             au prochain test(appel de la méthode) */

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
      {/* News doit afficher les données reçues de l'API news */}
       <RenderApiInfos apiInfos={this.state.articleInformationsFromNewsApi}/>
      {/* La props transfert la méthode afin de remonter l'information de l'enfant jusqu'ici */}
       <ArticleChoice articleToMemorize={this.memorizeArticle}/>
      </div>
    );
  }
}

export default App;