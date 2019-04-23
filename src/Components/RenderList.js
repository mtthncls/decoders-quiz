import React from 'react';
import { Card, CardText, Container, Row, Col} from 'reactstrap';

const RenderList = ({articlesToRecap}) => {
    return ( 
        <article>
            <Container>
                <Card className="mt-3" body inverse color="info">
                    <Row>
                        <Col sm="12" lg="6">
                            <CardText>
                                <img width="50%" src={articlesToRecap.urlToImage} alt="Article"></img>
                            </CardText>
                        </Col>
                        <Col sm="12" lg="6">
                            <h3>
                                <CardText>
                                    <a href={articlesToRecap.url}>{articlesToRecap.title}</a>
                                </CardText>
                            </h3>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </article>
     );
}
 
export default RenderList;