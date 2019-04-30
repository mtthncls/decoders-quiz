import React from 'react';
import { Button, Row, Col } from 'reactstrap';

const ArticleChoice = ({addCurrentArticle, nextQuestion}) => {
        return ( 
            <article>
                    <Row>
                        <Col col="12" md="6" className="mt-3 simple-button transition ">
                            <Button onClick={nextQuestion} className="ButtonSize" >No thanks</Button>
                        </Col>
                        <Col col="12" md="6" className="zoom-button transition mt-3">
                            <Button onClick={addCurrentArticle} className="ButtonSize">Yes</Button>
                        </Col>
                    </Row>
            </article>
         );
        };
 
export default ArticleChoice;

