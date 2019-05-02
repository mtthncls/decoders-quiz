import React from 'react';
import { Button, Row, Col } from 'reactstrap';

const ArticleChoice = ({addCurrentArticle, nextQuestion}) => {
        return ( 
            <div>
                    <Row>
                        <Col col="12" md="6" className="mt-3 negative">
                            <Button onClick={nextQuestion} className="ButtonSize" >No thanks</Button>
                        </Col>
                        <Col col="12" md="6" className="positive mt-3">
                            <Button onClick={addCurrentArticle} className="ButtonSize">Yes</Button>
                        </Col>
                    </Row>
            </div>
         );
        };
 
export default ArticleChoice;

