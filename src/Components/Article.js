import React from 'react';
import {Container, Row, Col } from 'reactstrap';

const Article = ({currentArticle}) => {
    return ( 
        <Container>
            <Row>
                <Col><img src={currentArticle.currentNewsArticle.urlToImage} className="imgSize" alt="news"/></Col>
            </Row>
            <Row>
                <Col><p className="newscontent">{currentArticle.currentNewsArticle.description}</p></Col>
            </Row>
        </Container>
     );
    }
 
export default Article;
