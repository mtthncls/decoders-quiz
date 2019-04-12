import React from 'react';
import {Container, Row, Col } from 'reactstrap';

const Article = ({apiInfos}) => {
    return ( 
        <Container>
            <Row>
                <Col><img src={apiInfos.currentNewsArticle.urlToImage} className="imgSize" alt="news"/></Col>
            </Row>
            <Row>
                <Col><p className="newscontent">{apiInfos.currentNewsArticle.description}</p></Col>
            </Row>
        </Container>
     );
    }
 
export default Article;
