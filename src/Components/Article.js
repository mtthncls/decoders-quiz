import React from 'react';
import { Row, Col } from 'reactstrap';

const Article = ({ currentArticle }) => {
    return (
        <div>
            <Row className="mb-1">
                <Col><img src={currentArticle.urlToImage} className="imgSize mt-4" alt="news"/></Col>
                <Col><div className="newscontent mt-3"><p>{currentArticle.description}</p></div></Col>
            </Row>
            <Row>
                <Col><h2 className="mt-5">Do you want read this news later ?</h2></Col>
            </Row>
        </div>
    );
}

export default Article;

