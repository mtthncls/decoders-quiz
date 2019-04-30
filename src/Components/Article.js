import React from 'react';
import { Row, Col } from 'reactstrap';

const Article = ({ currentArticle }) => {
    return (
        <div>
            <Row>
                <Col><img src={currentArticle.urlToImage} className="imgSize mt-4" alt="news"/></Col>
                <Col><p className="newscontent mt-3">{currentArticle.description}</p></Col>
            </Row>
            <Row>
                <Col><h2>Do you want read this news later ?</h2></Col>
            </Row>
        </div>
    );
}

export default Article;

