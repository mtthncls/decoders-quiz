import React, { Component } from 'react';
import './App.css';
import News from "./Components/News";
import ArticleChoice from './Components/Bottom'
import Memorize from './Components/MemorizeChoice';

class App extends Component {
  constructor(){
    super()
      this.state = { 
        articleInformations : {
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
        transferArticle : ""
 }
 this.memorizeArticle = this.memorizeArticle.bind(this)
}

 memorizeArticle(){
     this.setState({ transferArticle : this.state.articleInformations.urlToImage });
 }

  render() {
    return (
      <div className="App">
      {/* News doit afficher les données reçues de l'API news */}
       <News/>

      {/* La props transfert la méthode afin de remonter l'information de l'enfant jusqu'ici */}
       <ArticleChoice articleToMemorize={this.memorizeArticle}/>

      {/* Memorize est le composant qui va servir à memoriser l'informations et remonter le tout jusqu'ici */}
       <Memorize transfer={this.state.transferArticle}/>
      </div>
    );
  }
}

export default App;
