import React from 'react';
import { Card, CardText, Row, Col} from 'reactstrap';

const ArticleSaved = ({articlesToRecap}) => {
    return ( 
        <div className="cardArticle">
            <Card className="mt-3 " body inverse color="info">
                <Row>
                    <Col sm="12" lg="6">
                        <CardText>
                            <img width="50%" src={articlesToRecap.urlToImage} alt="Article"></img>
                        </CardText>
                    </Col>
                    <Col sm="12" lg="6">
                        <h3>
                            <CardText>
                                <a href={articlesToRecap.url}><span className="articletitle">{articlesToRecap.title}</span></a>
                            </CardText>
                        </h3>
                    </Col>
                </Row>
            </Card>
        </div>
     );
}
 
export default ArticleSaved;

