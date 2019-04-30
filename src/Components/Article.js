import React from 'react';
import { Row, Col } from 'reactstrap';

const Article = ({ currentArticle }) => {
    return (
        <div>
            <Row className="container-news mb-1">
                <Col><img src={currentArticle.urlToImage} className="imgSize" alt="news"/></Col>
                <Col><p className="newscontent mt-3 mb-3">{currentArticle.description} </p></Col>
            </Row>
            <Row>
                <Col><h2 className="mt-3">Do you want read this news later ?</h2></Col>
            </Row>
        </div>
    );
}

export default Article;

