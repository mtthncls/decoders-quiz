import React from 'react';
import { Button, Row, Col } from 'reactstrap';

const ArticleChoice = ({addCurrentArticle, nextQuestion, isArticleButtonDisabled}) => {
        return ( 
            <div>
                    <Row>
                        <Col col="12" md="6" className="mt-3 negative">
                            <Button disabled={isArticleButtonDisabled} onClick={nextQuestion} className="ButtonSize" >No thanks</Button>
                        </Col>
                        <Col col="12" md="6" className="positive mt-3">
                            <Button disabled={isArticleButtonDisabled} onClick={addCurrentArticle} className="ButtonSize">Yes</Button>
                        </Col>
                    </Row>
            </div>
         );
        };
 
export default ArticleChoice;

