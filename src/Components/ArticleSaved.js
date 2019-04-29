import React from 'react';
import { Card, CardText, Container, Row, Col} from 'reactstrap';

const ArticleSaved = ({articlesToRecap}) => {
    return ( 
        <article>
            <Container>
                <Card className="mt-3 card-support" body inverse color="secondary">
                    <Row>
                        <Col sm="12" lg="6">
                            <CardText>
                                <img width="50%" src={articlesToRecap.urlToImage} alt="Article"></img>
                            </CardText>
                        </Col>
                        <Col sm="12" lg="6">
                            <h3>
                                <CardText>
                                    <a style={{color: "white"}} href={articlesToRecap.url}>{articlesToRecap.title}</a>
                                </CardText>
                            </h3>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </article>
     );
}
 
export default ArticleSaved;

