import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

const ArticleChoice = ({articleToMemorize}) => {
        return ( 
            <article>
                <Container>
                    <Row>
                        <Col><h1 className="mt-3">Do you want more informations about your answer ?</h1></Col>
                    </Row>
                    <Row>
                        <Col col="12" md="6" className="mt-3"> <Button className="ButtonSize" color="danger">No</Button>{' '} </Col>
                        <Col col="12" md="6" className="mt-3"> <Button onClick={articleToMemorize} className="ButtonSize" color="success">Yes</Button>{' '} </Col>
                    </Row>
                </Container>
            </article>
         );
        }
 
export default ArticleChoice;