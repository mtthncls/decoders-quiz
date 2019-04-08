import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import Memorize from "./MemorizeChoice"

class ArticleChoice extends Component {
    state = { 
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

     memorizeArticle(){
         this.setState({ transferArticle : this.state.articleInformations.urlToImage });
     }

    render() { 
        console.log(this.state.transferArticle)
        return ( 
            <article>
                <Container>
                    <Row>
                        <Col><h1 className="mt-3">Do you want more informations about your answer ?</h1></Col>
                    </Row>
                    <Row>
                        <Col col="12" md="6" className="mt-3"> <Button className="ButtonSize" color="danger">No</Button>{' '} </Col>
                        <Col col="12" md="6" className="mt-3"> <Button onClick={() => this.memorizeArticle()} className="ButtonSize" color="success">Yes</Button>{' '} </Col>
                    </Row>
                </Container>
                <Memorize transfer={this.state.transferArticle} />
            </article>
         );
    }
}
 
export default ArticleChoice;