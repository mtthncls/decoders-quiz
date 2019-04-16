import React from 'react';
import { Card, CardText, Container, Row, Col} from 'reactstrap';

const RenderList = ({articlesToRecap}) => {
    return ( 
        <article>
            <Container>
                <Card body inverse color="info">
                    <Row>
                        <Col><CardText><img src={articlesToRecap.urlToImage} alt="Article"></img></CardText></Col>
                        <Col><CardText><a href={articlesToRecap.url}>{articlesToRecap.title}</a></CardText></Col>
                    </Row>
                </Card>
            </Container>
        </article>
     );
}
 
export default RenderList;