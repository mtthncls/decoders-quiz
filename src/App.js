import React, { Component } from 'react';
import './App.css';
import RenderApiInfos from "./Components/RenderApiInfos";
import ArticleChoice from './Components/ArticleChoice'

class App extends Component {
  constructor(){
    super()
      this.state = { 
        articleInformationsFromNewsApi : {
            source: {
            id: null,
            name: "Newsbtc.com"
            },
            author: "Davit Babayan",
            title: "Bitcoin Trending Higher among Google US Users following Price Rally",
            description: "Bitcoin is once again entering the psyche of an average American, at least according to the ongoing internet statistics. Data collected from Google Trends shows that internet searches for the keyword ‘bitcoin’ surged between March 31 and April 6 in the US. Th…",
            url: "https://www.newsbtc.com/2019/04/08/google-us-users-bitcoin-price/",
            urlToImage: "https://www.newsbtc.com/wp-content/uploads/2019/01/crypto-google-shutterstock_1076144270.jpg",
            publishedAt: "2019-04-08T14:00:30Z",
            content: "Bitcoin is once again entering the psyche of an average American, at least according to the ongoing internet statistics. Data collected from Google Trends shows that internet searches for the keyword ‘bitcoin’ surged between March 31 and April 6 in the US. T… [+2945 chars]"
            },
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
